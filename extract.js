const fs = require('fs');

const html = fs.readFileSync('OPAQUE_FULLPAGE.html', 'utf8');

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
  let css = styleMatch[1];
  fs.writeFileSync('src/app/globals.css', `
@tailwind base;
@tailwind components;
@tailwind utilities;

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
` + css);
}

let bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
if (bodyMatch) {
  let body = bodyMatch[1];
  body = body.replace(/class=/g, 'className=');
  body = body.replace(/style="([^"]*)"/g, (match, styles) => {
    const styleObj = {};
    styles.split(';').forEach(s => {
      if(!s.trim()) return;
      const [key, ...values] = s.split(':');
      if(key && values.length) {
        const camelKey = key.trim().replace(/-([a-z])/g, (_, g) => g.toUpperCase());
        styleObj[camelKey] = values.join(':').trim();
      }
    });
    return 'style={' + JSON.stringify(styleObj) + '}';
  });
  body = body.replace(/<br>/g, '<br/>').replace(/<hr>/g, '<hr/>').replace(/<img(.*?)>/g, (m, c) => c.endsWith('/') ? m : `<img${c}/>`);
  body = body.replace(/<input(.*?)>/g, (m, c) => c.endsWith('/') ? m : `<input${c}/>`);
  body = body.replace(/<!--[\s\S]*?-->/g, ''); 
  body = body.replace(/stroke-width/g, 'strokeWidth');
  fs.writeFileSync('temp_body.jsx', body);
}
