const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const svgPath = path.join(__dirname, '..', 'src', 'assets', 'images', 'logo.svg');
const outPath = path.join(__dirname, '..', 'src', 'assets', 'images', 'logo.png');

if (!fs.existsSync(svgPath)) {
  console.error('SVG source not found:', svgPath);
  process.exit(1);
}

sharp(svgPath)
  .png()
  .toFile(outPath)
  .then(() => console.log('Generated', outPath))
  .catch((err) => { console.error('Error generating PNG:', err); process.exit(2); });
