const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'data seo');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.csv'));

const map = new Map();

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const lines = content.split('\n');
  if (lines.length < 2) continue;
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const parts = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    if (parts.length >= 5) {
      const kw = parts[0].replace(/"/g, '').toLowerCase().trim();
      const vol = parseInt(parts[3].replace(/"/g, '')) || 0;
      const kd = parts[4].replace(/"/g, '') || '';
      const intent = parts[1].replace(/"/g, '') || '';
      if (!map.has(kw) || map.get(kw).vol < vol) {
        map.set(kw, { kw, vol, kd, intent });
      }
    }
  }
}

const all = Array.from(map.values()).sort((a,b) => b.vol - a.vol);
const iptvAll = all.filter(x => x.kw.includes('iptv'));

console.log('--- TOP 30 OVERALL IPTV KEYWORDS (GERMANY MARKET) ---');
console.table(iptvAll.slice(0, 30));
