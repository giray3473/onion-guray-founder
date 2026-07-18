/**
 * Next.js standalone çıktısını aaPanel / PM2 için hazırlar.
 * Kullanım: npm run build:aapanel
 */
import fs from "node:fs";
import path from "node:path";

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

const root = process.cwd();
const standalone = path.join(root, ".next", "standalone");
const staticSrc = path.join(root, ".next", "static");
const staticDest = path.join(standalone, ".next", "static");
const publicSrc = path.join(root, "public");
const publicDest = path.join(standalone, "public");

if (!fs.existsSync(standalone)) {
  console.error("standalone bulunamadı. Önce: npm run build");
  process.exit(1);
}

copyDir(staticSrc, staticDest);
if (fs.existsSync(publicSrc)) copyDir(publicSrc, publicDest);

console.log("Standalone hazır: .next/standalone");
console.log("PM2: pm2 start ecosystem.config.cjs");
