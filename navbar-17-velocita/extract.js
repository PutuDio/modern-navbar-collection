const fs = require('fs');
const path = require('path');

const dir = 'e:/Dio Web Program/modern-navbar-collection/navbar-17-velocita';

const indexHtml = fs.readFileSync(path.join(dir, 'index.html'), 'utf-8');
const styleCss = fs.readFileSync(path.join(dir, 'style.css'), 'utf-8');
const scriptJs = fs.readFileSync(path.join(dir, 'script.js'), 'utf-8');

// Extract HTML
const htmlMatch = indexHtml.match(/(<!-- =+[\s\S]*?VELOCITA NAVBAR[\s\S]*?<\/nav>)/);
const navHtml = htmlMatch ? htmlMatch[1] : '';

// Extract CSS (up to DEMO PAGE STYLES)
const cssEndIndex = styleCss.indexOf('/* =============================================================\n   DEMO PAGE STYLES');
const navCss = cssEndIndex !== -1 ? styleCss.substring(0, cssEndIndex).trim() : styleCss;

// For JS, we just take the whole file, maybe excluding the initScrollObserver since it uses .demo-section
// But let's just include the whole JS as they might need it, or strip the demo-section observer.
const jsClean = scriptJs.replace(/const sections\s*=\s*document\.querySelectorAll\('\.demo-section'\);\n/g, '')
  .replace(/\/\* ─────────────────────────────────────────────\s*Scroll-Based Active Detection\s*───────────────────────────────────────────── \*\/[\s\S]*?\/\* ─────────────────────────────────────────────\s*Mobile Menu/g, '/* ─────────────────────────────────────────────\n     Mobile Menu')
  .replace(/\/\/ Scroll-based active detection\s*initScrollObserver\(\);\s*/g, '');

const mdContent = `# Velocita Navbar Code

This file contains only the code needed to implement the Velocita Navbar. 
You don't need to copy any demo page styles or hero sections.

## HTML
\`\`\`html
${navHtml}
\`\`\`

## CSS
Place this in your \`style.css\` (make sure to include the font imports if needed).
\`\`\`css
${navCss}
\`\`\`

## JavaScript
Place this in your \`script.js\`. Note: The scroll-spy functionality for demo sections has been removed from this clean version, you can implement your own active state logic or keep this for click-based navigation.
\`\`\`javascript
${jsClean}
\`\`\`
`;

fs.writeFileSync(path.join(dir, 'NAVBAR_CODE.md'), mdContent);
console.log('Successfully created NAVBAR_CODE.md');
