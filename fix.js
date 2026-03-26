const fs = require('fs');
let code = fs.readFileSync('src/data/constants.ts', 'utf-8');

// Add field to type
code = code.replace(/name: string;\n  label: string;/, 'name: string;\n  keyboardObjectName: string;\n  label: string;');

// Replace in SKILLS
code = code.replace(/name:\s*"(.*?)",\s*\n\s*label:\s*"(.*?)",/g, 'name: "",\n    keyboardObjectName: "",\n    label: "",');

fs.writeFileSync('src/data/constants.ts', code, 'utf-8');
