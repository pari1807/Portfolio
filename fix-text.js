const fs = require('fs');
let code = fs.readFileSync('src/components/animated-background.tsx', 'utf-8');

code = code.replace(/\/\/ Update the physical 3D text to the new skill name\n\s*if \(child\.type === "Text" \|\| childName\.includes\("text"\)\) \{[\s\S]*?\}\n\s*\}/g, 
  '// Update the physical 3D text to the new skill name\n          if (child.type === "Text" || childName.includes("text")) {\n            const shortName = skill.label.length <= 6 ? skill.label : skill.label.substring(0, 5) + ".";\n            child.text = shortName;\n            child.content = shortName;\n            child.visible = true; // FORCE TEXT VISIBLE\n          }\n        }');

fs.writeFileSync('src/components/animated-background.tsx', code, 'utf-8');
