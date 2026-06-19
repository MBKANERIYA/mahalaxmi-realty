const fs = require('fs');
const glob = require('glob');

const files = [
  'frontend/src/pages/PropertyDetails.jsx',
  'frontend/src/pages/Properties.jsx',
  'frontend/src/pages/BlogDetails.jsx',
  'frontend/src/pages/Blog.jsx',
  'frontend/src/pages/AdminDashboard.jsx',
  'frontend/src/components/Listings.jsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // We add a global constant at the top after imports
    const apiConst = `const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';\n`;
    
    if (!content.includes('const API_URL =')) {
      // Find last import
      const lastImportIndex = content.lastIndexOf('import ');
      const endOfLastImport = content.indexOf('\n', lastImportIndex) + 1;
      content = content.slice(0, endOfLastImport) + '\n' + apiConst + content.slice(endOfLastImport);
    }

    content = content.replace(/http:\/\/localhost:5001/g, '${API_URL}');
    // Because we used template literals inside strings like fetch('${API_URL}/api...'), we need to ensure they are backticks
    content = content.replace(/fetch\('(\$\{API_URL\}[^']+)'\)/g, "fetch(`$1`)");
    content = content.replace(/fetch\("(\$\{API_URL\}[^"]+)"\)/g, "fetch(`$1`)");
    // Also cover situations like fetch('http://localhost...
    content = content.replace(/fetch\('([^']*)'\)/g, (match, p1) => {
      if (p1.includes('${API_URL}')) return `fetch(\`${p1}\`)`;
      return match;
    });

    fs.writeFileSync(file, content);
    console.log('Fixed', file);
  }
});
