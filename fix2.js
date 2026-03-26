const fs = require('fs');
let code = fs.readFileSync('src/data/constants.ts', 'utf-8');

code = code.replace(/name:\s*string;[\s\r\n]*label:\s*string;/, 'name: string;\n  keyboardObjectName: string;\n  label: string;');

let i = 0;
code = code.replace(/name:\s*"(.*?)",/g, (match, p1) => {
  i++;
  return match + '\n    keyboardObjectName: "' + p1 + '",';
});

fs.writeFileSync('src/data/constants.ts', code, 'utf-8');
