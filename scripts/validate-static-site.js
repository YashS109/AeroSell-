const fs = require('fs');
const requiredFiles = ['index.html', 'src/styles.css', 'src/main.js'];
for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    throw new Error(`Missing required file: ${file}`);
  }
}
const html = fs.readFileSync('index.html', 'utf8');
for (const phrase of ['A-to-Z daily needs', 'India map AI coverage', 'Air ambulance']) {
  if (!html.includes(phrase)) {
    throw new Error(`Missing required content: ${phrase}`);
  }
}
console.log('Static AeroSell site validation passed.');
