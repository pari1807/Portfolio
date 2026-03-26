const fs = require('fs');
let content = fs.readFileSync('src/components/animated-background.tsx', 'utf-8');
content = content.replace(/const allObjects = splineApp\.getAllObjects\(\);[\s\S]*?await sleep\(900\);/m, 'const allObjects = splineApp.getAllObjects();\n      const keycaps = allObjects.filter((obj) => obj.name === "keycap" || obj.name === "keycap-mobile" || obj.name === "keycap-desktop");\n\n      await sleep(900);');
fs.writeFileSync('src/components/animated-background.tsx', content);
