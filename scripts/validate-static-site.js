const fs = require('fs');
const requiredFiles = ['index.html', 'src/styles.css', 'src/main.js'];
for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    throw new Error(`Missing required file: ${file}`);
  }
}
const html = fs.readFileSync('index.html', 'utf8');
if (html.includes('href="src/styles.css"') || html.includes('src="src/main.js"')) {
  throw new Error('Critical CSS and JS must be inline for GitHub Pages reliability.');
}
for (const phrase of ['Everything you need, delivered beautifully', 'India map AI', 'Air ambulance and medic care', 'Add to cart']) {
  if (!html.includes(phrase)) {
    throw new Error(`Missing required content: ${phrase}`);
  }
}
console.log('Static AeroSell ecommerce validation passed.');
