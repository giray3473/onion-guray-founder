# Güray — Kurucu sayfası

Bill Chien tarzı kişisel kurucu sayfası · Onion Development markası.

**Domain:** https://guray.oniondevelopment.com.tr

## İçeriği düzenleme

Tek dosya: [`lib/content.ts`](lib/content.ts)

- `person` — isim, rol, tagline, bio, e-posta, sosyal
- `experience` — deneyim satırları
- `focus` — odak / stack
- `team` — ekip üyeleri (subdomain linkleri)
- `qa` — soru–cevap

Avatar için `public/avatar.jpg` koy ve `person.avatarEnabled = true` yap.

## Geliştirme

```bash
npm install
npm run dev
```

## Yayın

Bkz. [DEPLOY.md](DEPLOY.md)
