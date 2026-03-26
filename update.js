const fs=require('fs');
let C=fs.readFileSync('src/data/constants.ts','utf-8');
C=C.replace(/    name: \"(.*?)\",\n    label: \"(.*?)\",/g, '    name: \"\",\n    keyboardObjectName: \"\",\n    label: \"\",');
fs.writeFileSync('src/data/constants.ts', C);
