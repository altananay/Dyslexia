#!/usr/bin/env node
/**
 * Removes inline data: font TTF URIs from semantic-ui-css/semantic.min.css
 * These cause webpack 5 (react-scripts 5) to fail with UnhandledSchemeError.
 */
const fs = require('fs');
const path = require('path');

const cssPath = path.resolve(
  __dirname,
  '../node_modules/semantic-ui-css/semantic.min.css'
);

if (!fs.existsSync(cssPath)) {
  console.log('semantic-ui-css not found, skipping patch.');
  process.exit(0);
}

let css = fs.readFileSync(cssPath, 'utf8');
const before = (css.match(/data:application\/x-font/g) || []).length;

// Remove url(data:application/x-font-ttf;...) references — keep rest of src intact
css = css.replace(/url\(data:application\/x-font-ttf[^)]*\),?/g, '');

const after = (css.match(/data:application\/x-font/g) || []).length;
fs.writeFileSync(cssPath, css, 'utf8');
console.log(`semantic-ui-css patched: removed ${before - after} data: font URI(s).`);
