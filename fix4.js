const fs = require('fs');
let content = fs.readFileSync('src/components/animated-background.tsx', 'utf-8');
content = content.replace(/const skill = Object\.values\(SKILLS\)\.find\(s => s\.keyboardObjectName === keycap\.name\);/, 'const parentName = (keycap as any).parent?.name || "";\n      const skill = Object.values(SKILLS).find(s => s.keyboardObjectName === parentName);');
fs.writeFileSync('src/components/animated-background.tsx', content);
