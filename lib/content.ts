/**
 * ═══════════════════════════════════════════════
 *  İÇERİK — burayı düzenle, sayfa otomatik güncellenir
 * ═══════════════════════════════════════════════
 */

export const person = {
  // düzenle: isim
  firstName: "Güray",
  lastName: "ÖZŞEKER",

  // düzenle: unvan / rol
  role: "Kurucu · Onion Development",

  // düzenle: lokasyon
  location: "Türkiye - Kütahya",

  // düzenle: hero altındaki tek cümle
  tagline:
    "Yazılım ve ürün deneyimleriyle sıradanın ötesini inşa eden kurucu.",

  // düzenle: kısa destek cümlesi (hero)
  support:
    "Modern web, otomasyon ve özel yazılım çözümlerinde netlik ve kalite.",

  // düzenle: biyografi paragrafları
  bio: [
    "Onion Development’ı kurduk çünkü yazılımın sadece kod değil, insanın işini ve hayatını kolaylaştıran bir dil olduğuna inanıyorum. Detaya takılırım; neden sorusunu bırakmam; teslim ettiğim her şeyin temiz ve sürdürülebilir olmasını isterim.",
    "Burayı kendi hikâyenle değiştir — geçmişin, yaklaşımın ve şu an neye odaklandığın. Birkaç paragraf yeter.",
  ],

  // düzenle: iletişim
  email: "info@oniondevelopment.com",

  // düzenle: sosyal linkler (boş bırakırsan gizlenir)
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Onion", href: "https://oniondevelopment.com.tr" },
  ] as Array<{ label: string; href: string }>,

  // düzenle: avatar — public/avatar.jpg koy; yoksa initials kullanılır
  avatarSrc: "/avatar.jpg",
  avatarEnabled: false,
} as const;

/** Deneyim timeline — Bill Chien “I work design” karşılığı */
export const experience = [
  {
    title: "Kurucu",
    company: "Onion Development",
    years: "2026",
  },
  {
    title: "İnsan Kaynakları Stajyer Personel",
    company: "TEİAŞ - 6. Bölge Müdürlüğü",
    years: "2025 - 2026",
  },
] as const;

/** Odak alanları / stack */
export const focus = [
  "Web uygulamaları",
  "Otomasyon sistemleri",
  "Ürün mimarisi",
  "Next.js · TypeScript",
  "Deneyim tasarımı",
] as const;

/** Ekip / diğer kurucular — subdomain linkleri opsiyonel */
export const team = [
  {
    name: "Semih Sakin",
    role: "Kurucu",
    href: "https://semih.oniondevelopment.com.tr",
  },
] as const;

/** Soru–cevap */
export const qa = [
  {
    q: "İyi bir yazılımcı / ürün insanı sence nasıl olmalı?",
    a: "Amacı, anlamı ve tasarladığı insanları anlayan biri. Şık olabilir ama hedef kitle anlamıyorsa iş tamamlanmamıştır.",
  },
  {
    q: "Tasarlamadığın / kod yazmadığın zamanlarda ne yaparsın?",
    a: "Burayı kendi rutinlerinle doldur — spor, müzik, yemek, oyun, müze…",
  },
  {
    q: "Doğal bir yeteneğin var mı?",
    a: "Placeholder — ritim, problem çözme, iletişim… kendi cevabını yaz.",
  },
  {
    q: "Gözlerini kapatsan şimdi nereye giderdin?",
    a: "Placeholder — bir yer, bir manzara, bir anı.",
  },
  {
    q: "Son zamanlarda neyle ilgileniyorsun?",
    a: "Placeholder — öğrenmekte olduğun şeyler, projeler, hobiler.",
  },
  {
    q: "Gece seni uyutmayan ne?",
    a: "Placeholder — sektör, AI, kalite, insanlık… kendi görüşünü yaz.",
  },
] as const;

export const navLinks = [
  { label: "Hakkında", href: "#about" },
  { label: "Deneyim", href: "#experience" },
  { label: "Ekip", href: "#team" },
  { label: "Soru–Cevap", href: "#qa" },
] as const;

export const sectionLabels = {
  experience: "Deneyim",
  focus: "Odak",
  team: "Ekip",
  qa: "Soru–Cevap",
} as const;
