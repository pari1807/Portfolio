const fs = require('fs');
let code = fs.readFileSync('src/components/animated-background.tsx', 'utf-8');

code = code.replace(/\/\/ Hide old baked-in SVG logos[\s\S]*?child\.visible = false;\n\s*\}/g, 
  '// Hide old baked-in SVG logos\n          if (childName.includes("logo") || childName.includes("icon") || child.type === "Vector") {\n            child.visible = false;\n          }\n          if (child.type === "Image" || childName.includes("image")) {\n            if (skill.icon) {\n                child.url = skill.icon;\n            }\n            child.visible = true;\n          }');

fs.writeFileSync('src/components/animated-background.tsx', code, 'utf-8');
