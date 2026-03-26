const fs = require('fs');
let code = fs.readFileSync('src/components/animated-background.tsx', 'utf-8');

code = code.replace(/if \(childName\.includes\("logo"\) \|\| childName\.includes\("icon"\) \|\| child\.type === "Vector" \|\| child\.type === "Image"\) \{/g, 'if (childName.includes("logo") || childName.includes("icon")) {');

fs.writeFileSync('src/components/animated-background.tsx', code, 'utf-8');
