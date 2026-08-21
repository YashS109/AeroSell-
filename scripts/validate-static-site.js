const fs = require('fs');
const requiredFiles = ['index.html', 'src/styles.css', 'src/main.js', 'manifest.webmanifest', 'service-worker.js'];
for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    throw new Error(`Missing required file: ${file}`);
  }
}
const html = fs.readFileSync('index.html', 'utf8');
if (html.includes('href="src/styles.css"') || html.includes('src="src/main.js"')) {
  throw new Error('Critical CSS and JS must be inline for GitHub Pages reliability.');
}
for (const phrase of ['AeroSell brings every daily need', 'Kanpur Nagar', 'Emergency number: 1800-123-AERO', 'Your cart', 'Orders and history', 'Add to cart', 'Pay with Razorpay', 'AERO10', 'Notify when available', '5G smartphone', 'Indian map API + live tracking', 'serviceWorker', 'manifest.webmanifest', 'Aero AI Support', 'Razorpay demo success', 'Search any Indian city']) {
  if (!html.includes(phrase)) {
    throw new Error(`Missing required content: ${phrase}`);
  }
}
console.log('Static AeroSell ecommerce validation passed.');
