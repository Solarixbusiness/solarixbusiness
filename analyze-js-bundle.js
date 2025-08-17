const fs = require('fs');
const path = require('path');

console.log('🔍 Analizzando bundle JavaScript...');

const staticDir = path.join(__dirname, '.next', 'static', 'chunks');

if (!fs.existsSync(staticDir)) {
  console.error('❌ Directory chunks non trovata');
  process.exit(1);
}

const files = fs.readdirSync(staticDir);
const jsFiles = files.filter(f => f.endsWith('.js'));

console.log('\n📊 ANALISI BUNDLE JAVASCRIPT:');
console.log('===============================');

let totalSize = 0;
const fileData = [];

jsFiles.forEach(file => {
  const filePath = path.join(staticDir, file);
  const stats = fs.statSync(filePath);
  const sizeKB = (stats.size / 1024).toFixed(2);
  
  fileData.push({
    name: file,
    size: stats.size,
    sizeKB: sizeKB
  });
  
  totalSize += stats.size;
});

// Ordina per dimensione
fileData.sort((a, b) => b.size - a.size);

console.log(`\n📦 Totale JavaScript: ${(totalSize / 1024).toFixed(2)} KB`);
console.log(`📄 Numero file: ${jsFiles.length}`);

console.log('\n🔴 FILE PIÙ PESANTI:');
fileData.forEach((file, index) => {
  const percentage = ((file.size / totalSize) * 100).toFixed(1);
  console.log(`${index + 1}. ${file.name}: ${file.sizeKB} KB (${percentage}%)`);
});

// Identifica vendor chunk
const vendorFile = fileData.find(f => f.name.includes('vendors'));
if (vendorFile) {
  console.log(`\n⚠️  VENDOR CHUNK: ${vendorFile.sizeKB} KB`);
  
  if (vendorFile.size > 500000) { // >500KB
    console.log('💡 RACCOMANDAZIONE: Vendor chunk troppo grande');
    console.log('   - Implementare code splitting più granulare');
    console.log('   - Separare React, UI libraries, utilities');
  }
}

// Identifica polyfills
const polyfillFile = fileData.find(f => f.name.includes('polyfill'));
if (polyfillFile) {
  console.log(`\n📱 POLYFILLS: ${polyfillFile.sizeKB} KB`);
  
  if (polyfillFile.size > 50000) { // >50KB
    console.log('💡 RACCOMANDAZIONE: Polyfill pesanti');
    console.log('   - Rimuovere polyfill per browser moderni');
    console.log('   - Usare browserslist più aggressivo');
  }
}

console.log('\n✅ Analisi completata');
