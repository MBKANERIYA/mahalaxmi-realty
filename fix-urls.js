const fs = require('fs');

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
    content = content.replace(
      "const API_URL = import.meta.env.VITE_API_URL !== undefined ? import.meta.env.VITE_API_URL : 'http://localhost:5001';",
      "const API_URL = import.meta.env.DEV ? 'http://localhost:5001' : '';"
    );
    fs.writeFileSync(file, content);
    console.log('Fixed', file);
  }
});
