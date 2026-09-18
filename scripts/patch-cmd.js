import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const binDir = path.resolve(__dirname, '../node_modules/.bin');

if (fs.existsSync(binDir)) {
  const files = fs.readdirSync(binDir).filter(f => f.endsWith('.cmd'));
  let count = 0;
  for (const file of files) {
    const filePath = path.join(binDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('SET dp0=%~dp0')) {
      fs.writeFileSync(filePath, content.replace(/SET dp0=%~dp0/g, 'SET "dp0=%~dp0"'), 'utf8');
      count++;
    }
  }
  if (count > 0) {
    console.log(`[patch-cmd] Patched ${count} .cmd files in node_modules/.bin for Windows paths with '&'.`);
  }
}
