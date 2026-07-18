# Güray — sıfırdan yayın (aaPanel + PM2)

Domain: `guray.oniondevelopment.com.tr`  
Port: **3001** (Onion ana site **3000**)

aaPanel’in **Node.js Projesi** özelliğini kullanma. Onion ana site gibi: **klasör + build + PM2 + Website reverse proxy**.

---

## 0) Eski kurulumu temizle

aaPanel → Web Sitesi → Node.js Projesi → **guray** varsa **sil** (durdur + kaldır).

SSH:

```bash
pm2 delete guray-founder 2>/dev/null || true
pm2 delete guray 2>/dev/null || true
rm -rf /www/wwwroot/OnionEkip/Güray/onion-guray-founder
mkdir -p /www/wwwroot/OnionEkip/Güray
cd /www/wwwroot/OnionEkip/Güray
```

---

## 1) Kodu çek (GitHub)

```bash
cd /www/wwwroot/OnionEkip/Güray
git clone https://github.com/giray3473/onion-guray-founder.git
cd onion-guray-founder
```

Klasör zaten varsa:

```bash
cd /www/wwwroot/OnionEkip/Güray/onion-guray-founder
git fetch origin
git reset --hard origin/master
```

---

## 2) Node 20 + bağımlılık + build

aaPanel Node sürümü **v20** olsun (v26 sorun çıkarabilir).

```bash
cd /www/wwwroot/OnionEkip/Güray/onion-guray-founder
node -v    # v20.x olmalı
rm -rf node_modules .next
rm -f yarn.lock
npm install
npm run build:aapanel
```

Bitince `.next/standalone/server.js` oluşmalı:

```bash
ls -la .next/standalone/server.js
```

---

## 3) PM2 başlat

```bash
cd /www/wwwroot/OnionEkip/Güray/onion-guray-founder
pm2 start ecosystem.config.cjs
pm2 save
pm2 status
curl -sI http://127.0.0.1:3001 | head -5
```

`200` / HTML gelmeli. Tarayıcı: `http://166.1.94.25:3001` → **GÜRAY** sayfası (ana Onion değil).

---

## 4) aaPanel Website (reverse proxy)

1. Web Sitesi → **Site ekle**
2. Domain: `guray.oniondevelopment.com.tr`
3. PHP gerekmez
4. Site oluşunca → **Ayarlar / Yapılandırma** → Nginx’i şuna benzer yap (veya `deploy/nginx.aapanel.conf`):

```nginx
server {
    listen 80;
    server_name guray.oniondevelopment.com.tr;

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

5. Kaydet → Nginx reload

**Kritik:** Ana **Onion** sitesinin Alan Adı listesinde `guray.oniondevelopment.com.tr` **olmasın**. Varsa sil.

---

## 5) SSL

Site → SSL → Let’s Encrypt → `guray.oniondevelopment.com.tr` → Force HTTPS.

---

## 6) DNS (Cloudflare)

| Tip | İsim | Hedef | Proxy |
|-----|------|-------|-------|
| CNAME | `guray` | `oniondevelopment.com.tr` | DNS only |
| veya A | `guray` | `166.1.94.25` | DNS only |

---

## 7) Kontrol

- [ ] `http://166.1.94.25:3001` → kurucu sayfası
- [ ] `https://guray.oniondevelopment.com.tr` → aynı sayfa
- [ ] `https://oniondevelopment.com.tr` → ana Onion (bozulmamış)

---

## Güncelleme

```bash
cd /www/wwwroot/OnionEkip/Güray/onion-guray-founder
git pull
rm -rf node_modules .next
npm install
npm run build:aapanel
pm2 restart guray-founder
pm2 save
```
