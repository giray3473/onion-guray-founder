# Deploy — guray.oniondevelopment.com.tr

Ana Onion sitesiyle aynı model: Next.js standalone + PM2 + Nginx (aaPanel).

## 1) DNS

`guray` A kaydı → sunucu IP (veya CNAME → ana domain).

## 2) Build

```bash
cd /www/wwwroot/guray.oniondevelopment.com.tr
npm ci
npm run build
```

Standalone çıktı: `.next/standalone` (+ `.next/static` ve `public` kopyalanır).

## 3) PM2

Ayrı port kullan (ana site genelde `3000`):

```js
// ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: "guray-founder",
      cwd: "/www/wwwroot/guray.oniondevelopment.com.tr",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3001",
      env: { NODE_ENV: "production", PORT: "3001" },
    },
  ],
};
```

```bash
pm2 start ecosystem.config.cjs
pm2 save
```

## 4) Nginx (aaPanel subdomain)

```nginx
server {
  listen 80;
  listen 443 ssl http2;
  server_name guray.oniondevelopment.com.tr;

  # SSL: aaPanel Let’s Encrypt

  location / {
    proxy_pass http://127.0.0.1:3001;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

## 5) Kontrol

- [ ] https://guray.oniondevelopment.com.tr açılıyor
- [ ] SSL aktif
- [ ] Ana site https://oniondevelopment.com.tr etkilenmedi
