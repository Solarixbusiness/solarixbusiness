const fs = require('fs');
const path = require('path');

// Analizza il report coverage e identifica JavaScript inutilizzato
function analyzeUnusedJS() {
  console.log('🔍 Analizzando JavaScript inutilizzato...');
  
  const reportPath = path.join(__dirname, '..', 'coverage-report.json');
  
  if (!fs.existsSync(reportPath)) {
    console.error('❌ Report coverage non trovato. Esegui prima: npm run coverage');
    return;
  }
  
  const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  
  console.log('\n📊 ANALISI JAVASCRIPT INUTILIZZATO:');
  console.log('=====================================');
  
  const recommendations = [];
  
  // Analizza file JavaScript con alta percentuale di codice inutilizzato
  report.javascript.files.forEach(file => {
    const unusedPercentage = 100 - parseFloat(file.usedPercentage);
    const fileName = file.url.split('/').pop() || file.url;
    
    if (unusedPercentage > 50 && file.unusedBytes > 5000) { // >50% unused e >5KB
      recommendations.push({
        file: fileName,
        url: file.url,
        unusedBytes: file.unusedBytes,
        unusedPercentage: unusedPercentage.toFixed(1),
        recommendation: getRecommendation(fileName, unusedPercentage)
      });
    }
  });
  
  // Ordina per bytes inutilizzati
  recommendations.sort((a, b) => b.unusedBytes - a.unusedBytes);
  
  console.log(`\n🎯 TROVATI ${recommendations.length} FILE CON JAVASCRIPT SIGNIFICATIVAMENTE INUTILIZZATO:\n`);
  
  recommendations.forEach((rec, index) => {
    console.log(`${index + 1}. 📄 ${rec.file}`);
    console.log(`   💾 Unused: ${(rec.unusedBytes / 1024).toFixed(2)} KB (${rec.unusedPercentage}%)`);
    console.log(`   💡 Raccomandazione: ${rec.recommendation}`);
    console.log('');
  });
  
  // Genera script di ottimizzazione
  generateOptimizationScript(recommendations);
  
  return recommendations;
}

function getRecommendation(fileName, unusedPercentage) {
  if (fileName.includes('chunk') || fileName.includes('vendor')) {
    return 'Ottimizzare webpack splitting o lazy loading';
  } else if (fileName.includes('analytics') || fileName.includes('gtag')) {
    return 'Ridurre script analytics o caricare condizionalmente';
  } else if (fileName.includes('polyfill')) {
    return 'Rimuovere polyfill non necessari per browser moderni';
  } else if (unusedPercentage > 80) {
    return 'Considerare rimozione completa o lazy loading';
  } else if (unusedPercentage > 60) {
    return 'Implementare code splitting o import dinamico';
  } else {
    return 'Refactoring per rimuovere funzioni inutilizzate';
  }
}

function generateOptimizationScript(recommendations) {
  const optimizations = [];
  
  recommendations.forEach(rec => {
    if (rec.file.includes('analytics') || rec.file.includes('gtag')) {
      optimizations.push({
        type: 'analytics',
        action: 'Ottimizzare caricamento Google Analytics',
        code: `
// Caricamento condizionale Google Analytics
if (typeof window !== 'undefined' && !window.gtag) {
  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
  script.async = true;
  document.head.appendChild(script);
  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID', { send_page_view: false });
}`
      });
    }
    
    if (rec.file.includes('chunk') && rec.unusedPercentage > 70) {
      optimizations.push({
        type: 'chunking',
        action: 'Migliorare webpack code splitting',
        code: `
// In next.config.js - Ottimizzare chunks
webpack: (config) => {
  config.optimization.splitChunks.chunks = 'all';
  config.optimization.splitChunks.cacheGroups = {
    vendor: {
      test: /[\\\\/]node_modules[\\\\/]/,
      name: 'vendors',
      chunks: 'all',
      minSize: 20000,
      maxSize: 100000,
    }
  };
  return config;
}`
      });
    }
  });
  
  // Salva script ottimizzazioni
  const scriptPath = path.join(__dirname, 'optimization-suggestions.js');
  fs.writeFileSync(scriptPath, `
// OTTIMIZZAZIONI SUGGERITE BASATE SU COVERAGE ANALYSIS
// Generato automaticamente il ${new Date().toISOString()}

${optimizations.map(opt => `
// ${opt.action}
${opt.code}
`).join('\n')}
  `);
  
  console.log(`📝 Script ottimizzazioni salvato in: ${scriptPath}`);
}

// Esegui se chiamato direttamente
if (require.main === module) {
  analyzeUnusedJS();
}

module.exports = { analyzeUnusedJS };
