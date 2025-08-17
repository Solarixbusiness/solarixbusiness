const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function analyzeCoverage() {
  console.log('🔍 Avvio analisi Coverage JavaScript...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Abilita coverage JavaScript e CSS
  await Promise.all([
    page.coverage.startJSCoverage(),
    page.coverage.startCSSCoverage()
  ]);
  
  try {
    // Naviga alla homepage (usa URL di produzione se locale non disponibile)
    console.log('📄 Navigando alla homepage...');
    const targetUrl = 'https://solarixbusiness.vercel.app';
    await page.goto(targetUrl, { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Aspetta che la pagina sia completamente caricata
    await page.waitForTimeout(3000);
    
    // Simula interazioni utente
    console.log('🖱️ Simulando interazioni utente...');
    await page.evaluate(() => {
      // Scroll della pagina
      window.scrollTo(0, document.body.scrollHeight / 2);
    });
    
    await page.waitForTimeout(2000);
    
    // Ottieni coverage
    const [jsCoverage, cssCoverage] = await Promise.all([
      page.coverage.stopJSCoverage(),
      page.coverage.stopCSSCoverage()
    ]);
    
    console.log('📊 Analizzando risultati coverage...');
    
    // Analizza JavaScript coverage
    let totalJSBytes = 0;
    let usedJSBytes = 0;
    const jsResults = [];
    
    for (const entry of jsCoverage) {
      totalJSBytes += entry.text.length;
      
      for (const range of entry.ranges) {
        usedJSBytes += range.end - range.start - 1;
      }
      
      const usedPercentage = entry.text.length > 0 
        ? (entry.ranges.reduce((acc, range) => acc + range.end - range.start, 0) / entry.text.length) * 100 
        : 0;
      
      // Filtra solo file del progetto (non node_modules)
      if (!entry.url.includes('node_modules') && !entry.url.includes('chrome-extension')) {
        jsResults.push({
          url: entry.url,
          totalBytes: entry.text.length,
          usedBytes: entry.ranges.reduce((acc, range) => acc + range.end - range.start, 0),
          usedPercentage: usedPercentage.toFixed(2),
          unusedBytes: entry.text.length - entry.ranges.reduce((acc, range) => acc + range.end - range.start, 0)
        });
      }
    }
    
    // Analizza CSS coverage
    let totalCSSBytes = 0;
    let usedCSSBytes = 0;
    const cssResults = [];
    
    for (const entry of cssCoverage) {
      totalCSSBytes += entry.text.length;
      
      for (const range of entry.ranges) {
        usedCSSBytes += range.end - range.start - 1;
      }
      
      const usedPercentage = entry.text.length > 0 
        ? (entry.ranges.reduce((acc, range) => acc + range.end - range.start, 0) / entry.text.length) * 100 
        : 0;
      
      if (!entry.url.includes('node_modules') && !entry.url.includes('chrome-extension')) {
        cssResults.push({
          url: entry.url,
          totalBytes: entry.text.length,
          usedBytes: entry.ranges.reduce((acc, range) => acc + range.end - range.start, 0),
          usedPercentage: usedPercentage.toFixed(2),
          unusedBytes: entry.text.length - entry.ranges.reduce((acc, range) => acc + range.end - range.start, 0)
        });
      }
    }
    
    // Genera report
    const report = {
      timestamp: new Date().toISOString(),
      javascript: {
        totalBytes: totalJSBytes,
        usedBytes: usedJSBytes,
        unusedBytes: totalJSBytes - usedJSBytes,
        usedPercentage: totalJSBytes > 0 ? ((usedJSBytes / totalJSBytes) * 100).toFixed(2) : 0,
        files: jsResults.sort((a, b) => b.unusedBytes - a.unusedBytes)
      },
      css: {
        totalBytes: totalCSSBytes,
        usedBytes: usedCSSBytes,
        unusedBytes: totalCSSBytes - usedCSSBytes,
        usedPercentage: totalCSSBytes > 0 ? ((usedCSSBytes / totalCSSBytes) * 100).toFixed(2) : 0,
        files: cssResults.sort((a, b) => b.unusedBytes - a.unusedBytes)
      }
    };
    
    // Salva report
    const reportPath = path.join(__dirname, '..', 'coverage-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Stampa risultati
    console.log('\n📈 RISULTATI COVERAGE ANALYSIS:');
    console.log('=====================================');
    
    console.log('\n🟨 JAVASCRIPT:');
    console.log(`Total: ${(totalJSBytes / 1024).toFixed(2)} KB`);
    console.log(`Used: ${(usedJSBytes / 1024).toFixed(2)} KB (${report.javascript.usedPercentage}%)`);
    console.log(`Unused: ${((totalJSBytes - usedJSBytes) / 1024).toFixed(2)} KB`);
    
    console.log('\n🟦 CSS:');
    console.log(`Total: ${(totalCSSBytes / 1024).toFixed(2)} KB`);
    console.log(`Used: ${(usedCSSBytes / 1024).toFixed(2)} KB (${report.css.usedPercentage}%)`);
    console.log(`Unused: ${((totalCSSBytes - usedCSSBytes) / 1024).toFixed(2)} KB`);
    
    console.log('\n🔴 TOP 5 FILE CON PIÙ JAVASCRIPT INUTILIZZATO:');
    report.javascript.files.slice(0, 5).forEach((file, index) => {
      const fileName = file.url.split('/').pop() || file.url;
      console.log(`${index + 1}. ${fileName}: ${(file.unusedBytes / 1024).toFixed(2)} KB unused (${(100 - parseFloat(file.usedPercentage)).toFixed(1)}%)`);
    });
    
    console.log('\n🔴 TOP 5 FILE CON PIÙ CSS INUTILIZZATO:');
    report.css.files.slice(0, 5).forEach((file, index) => {
      const fileName = file.url.split('/').pop() || file.url;
      console.log(`${index + 1}. ${fileName}: ${(file.unusedBytes / 1024).toFixed(2)} KB unused (${(100 - parseFloat(file.usedPercentage)).toFixed(1)}%)`);
    });
    
    console.log(`\n📄 Report completo salvato in: ${reportPath}`);
    
  } catch (error) {
    console.error('❌ Errore durante analisi coverage:', error);
  } finally {
    await browser.close();
  }
}

// Esegui se chiamato direttamente
if (require.main === module) {
  analyzeCoverage().catch(console.error);
}

module.exports = { analyzeCoverage };
