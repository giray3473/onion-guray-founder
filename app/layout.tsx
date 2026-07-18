import { SITE_URL, siteSeo } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteSeo.title,
    template: siteSeo.titleTemplate,
  },
  description: siteSeo.description,
  applicationName: "Güray — Onion Development",
  authors: [{ name: "Güray", url: SITE_URL }],
  creator: "Onion Development",
  publisher: "Onion Development",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteSeo.title,
    description: siteSeo.description,
    url: SITE_URL,
    siteName: "Onion Development",
    locale: "tr_TR",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: siteSeo.title,
    description: siteSeo.description,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black font-[family-name:var(--font-body)] text-off-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[12px] focus:bg-white focus:px-4 focus:py-2 focus:text-[13px] focus:text-black"
        >
          İçeriğe atla
        </a>
        <div className="noise-overlay" aria-hidden />
        {children}
      </body>
    </html>
  );
}
