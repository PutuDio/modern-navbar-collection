const fs = require('fs');
const path = require('path');

const dir = __dirname;

const indexHtml = fs.readFileSync(path.join(dir, 'index.html'), 'utf-8');
const styleCss = fs.readFileSync(path.join(dir, 'style.css'), 'utf-8');
const scriptJs = fs.readFileSync(path.join(dir, 'script.js'), 'utf-8');

// Extract Header & Mobile Drawer HTML
const htmlHeaderMatch = indexHtml.match(/(<!-- =+[\s\S]*?MERIDIAN CORPORATE HEADER[\s\S]*?<\/header>)/);
const headerHtml = htmlHeaderMatch ? htmlHeaderMatch[1] : '';

const htmlDrawerMatch = indexHtml.match(/(<!-- =+[\s\S]*?MOBILE NAVIGATION DRAWER[\s\S]*?<\/div>\s*<\/div>)/);
const drawerHtml = htmlDrawerMatch ? htmlDrawerMatch[1] : '';

const navHtml = `${headerHtml}\n\n${drawerHtml}`;

// Extract CSS up to DEMO PAGE SECTIONS
const cssEndIndex = styleCss.indexOf('/* ─────────────────────────────────────────────\n   DEMO PAGE SECTIONS');
const navCss = cssEndIndex !== -1 ? styleCss.substring(0, cssEndIndex).trim() : styleCss;

const mdContent = `# Meridian Corporate Navbar Code

This documentation file provides the isolated code required to integrate the **Meridian Corporate Navigation System** into your project, free of any hero sections or demo content.

---

## 1. HTML Markup
Include the Google Font in your \`<head>\`:
\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
\`\`\`

Insert the following navigation structure directly inside \`<body>\`:
\`\`\`html
${navHtml}
\`\`\`

---

## 2. CSS Styles
Add this to your stylesheet (e.g. \`style.css\` or global layout style):
\`\`\`css
${navCss}
\`\`\`

---

## 3. JavaScript
Include this in your \`script.js\` or before \`</body>\`:
\`\`\`javascript
${scriptJs}
\`\`\`
`;

fs.writeFileSync(path.join(dir, 'NAVBAR_CODE.md'), mdContent);
console.log('Successfully generated NAVBAR_CODE.md for Meridian Corporate Navbar.');
