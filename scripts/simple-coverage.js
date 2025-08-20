// Analisi JavaScript inutilizzato basata su build output
const fs = require('fs');
const path = require('path');

function analyzeJSBundle() {
  try {
    console.log('🔍 Analizzando bundle JavaScript per codice inutilizzato...');
  
  const buildDir = path.join(__dirname, '..', '.next');
  const staticDir = path.join(buildDir, 'static');
  
  if (!fs.existsSync(buildDir)) {
    console.error('❌ Directory .next non trovata. Esegui prima: npm run build');
    return;
  }
  
  // Analizza chunks JavaScript
  const jsFiles = [];
  
  function findJSFiles(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findJSFiles(filePath);
      } else if (file.endsWith('.js')) {
        const size = stat.size;
        jsFiles.push({
          name: file,
          path: filePath,
          size: size,
          sizeKB: (size / 1024).toFixed(2)
        });
      }
    });
  }
  
  findJSFiles(staticDir);
  
  // Ordina per dimensione
  jsFiles.sort((a, b) => b.size - a.size);
  
  console.log('\n📊 ANALISI BUNDLE JAVASCRIPT:');
  console.log('===============================');
  
  let totalSize = 0;
  jsFiles.forEach(file => totalSize += file.size);
  
  console.log(`\n📦 Totale JavaScript: ${(totalSize / 1024).toFixed(2)} KB`);
  console.log(`📄 Numero file: ${jsFiles.length}`);
  
  console.log('\n🔴 TOP 10 FILE PIÙ PESANTI:');
  jsFiles.slice(0, 10).forEach((file, index) => {
    const percentage = ((file.size / totalSize) * 100).toFixed(1);
    console.log(`${index + 1}. ${file.name}: ${file.sizeKB} KB (${percentage}%)`);
  });
  
  // Identifica possibili ottimizzazioni
  const recommendations = [];
  
  jsFiles.forEach(file => {
    if (file.name.includes('vendors') && file.size > 200000) { // >200KB
      recommendations.push({
        file: file.name,
        issue: 'Vendor bundle troppo grande',
        solution: 'Implementare code splitting più granulare',
        impact: 'Alto'
      });
    }
    
    if (file.name.includes('polyfill') && file.size > 50000) { // >50KB
      recommendations.push({
        file: file.name,
        issue: 'Polyfill pesanti',
        solution: 'Rimuovere polyfill per browser moderni',
        impact: 'Medio'
      });
    }
    
    if (file.size > 100000 && !file.name.includes('vendors')) { // >100KB non-vendor
      recommendations.push({
        file: file.name,
        issue: 'Chunk applicazione troppo grande',
        solution: 'Lazy loading o code splitting',
        impact: 'Alto'
      });
    }
  });
  
  if (recommendations.length > 0) {
    console.log('\n💡 RACCOMANDAZIONI OTTIMIZZAZIONE:');
    console.log('===================================');
    
    recommendations.forEach((rec, index) => {
      console.log(`\n${index + 1}. 📄 ${rec.file}`);
      console.log(`   ⚠️  Problema: ${rec.issue}`);
      console.log(`   💡 Soluzione: ${rec.solution}`);
      console.log(`   🎯 Impatto: ${rec.impact}`);
    });
  }
  
  // Analizza specificamente vendor chunks
  const vendorFiles = jsFiles.filter(f => f.name.includes('vendors'));
  if (vendorFiles.length > 0) {
    console.log('\n📦 ANALISI VENDOR CHUNKS:');
    console.log('=========================');
    
    vendorFiles.forEach(file => {
      console.log(`📄 ${file.name}: ${file.sizeKB} KB`);
      
      // Leggi contenuto per identificare librerie
      try {
        const content = fs.readFileSync(file.path, 'utf8');
        const libraries = [];
        
        // Cerca pattern comuni di librerie
        if (content.includes('react')) libraries.push('React');
        if (content.includes('next')) libraries.push('Next.js');
        if (content.includes('framer')) libraries.push('Framer Motion');
        if (content.includes('headless')) libraries.push('Headless UI');
        if (content.includes('radix')) libraries.push('Radix UI');
        if (content.includes('resend')) libraries.push('Resend');
        
        if (libraries.length > 0) {
          console.log(`   📚 Librerie: ${libraries.join(', ')}`);
        }
      } catch (error) {
        console.log(`   ❌ Errore lettura file: ${error.message}`);
      }
    });
  }
  
  // Genera ottimizzazioni webpack
  generateWebpackOptimizations(recommendations, jsFiles);
  
  return { jsFiles, recommendations, totalSize };
  
  } catch (error) {
    console.error('❌ Errore durante analisi bundle:', error.message);
    return null;
  }
}

function generateWebpackOptimizations(recommendations, jsFiles) {
  const hasLargeVendor = jsFiles.some(f => f.name.includes('vendors') && f.size > 200000);
  const hasLargeChunks = jsFiles.some(f => f.size > 100000 && !f.name.includes('vendors'));
  
  let optimizations = `
// OTTIMIZZAZIONI WEBPACK SUGGERITE
// Aggiungi in next.config.js

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ottimizzazioni code splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 100000,
        cacheGroups: {`;

  if (hasLargeVendor) {
    optimizations += `
          // Separa React in chunk dedicato
          react: {
            test: /[\\\\/]node_modules[\\\\/](react|react-dom)[\\\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
          // Separa UI libraries
          ui: {
            test: /[\\\\/]node_modules[\\\\/](@headlessui|@radix-ui|@heroicons)[\\\\/]/,
            name: 'ui-libs',
            chunks: 'all',
            priority: 15,
          },`;
  }

  optimizations += `
          // Vendor chunk ottimizzato
          vendor: {
            test: /[\\\\/]node_modules[\\\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            maxSize: 150000,
          }
        }
      };
    }
    return config;
  }
};`;

  const scriptPath = path.join(__dirname, 'webpack-optimizations.js');
  fs.writeFileSync(scriptPath, optimizations);
  
  console.log(`\n📝 Ottimizzazioni webpack salvate in: ${scriptPath}`);
}

// Esegui se chiamato direttamente
if (require.main === module) {
  analyzeJSBundle();
}

module.exports = { analyzeJSBundle };
