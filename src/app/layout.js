/** @format */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Global Car Maintenance Center Al Nuzha",
  description: "مركز العالمية لصيانة السيارات النزهة - خبرة خمس سنوات في تقديم خدمات صيانة شاملة لسيارتك",
  keywords: "صيانة السيارات, ورشة ميكانيكا, كهرباء السيارات, إصلاح تكييف, فحص كومبيوتر, تنظيف بخاخات, تركيب قماشات, خرط هوبات, توضيب علب دريكسون, توضيب ماكينه, تربيط, جدة, السعودية",
  authors: [{ name: "Global Car Maintenance Center" }],
  creator: "Global Car Maintenance Center",
  publisher: "Global Car Maintenance Center",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://globalcarmaintenance.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Global Car Maintenance Center Al Nuzha",
    description: "مركز العالمية لصيانة السيارات النزهة - خبرة خمس سنوات في تقديم خدمات صيانة شاملة لسيارتك",
    url: "https://globalcarmaintenance.com",
    siteName: "Global Car Maintenance Center",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Car Maintenance Center Al Nuzha",
    description: "مركز العالمية لصيانة السيارات النزهة - خبرة خمس سنوات في تقديم خدمات صيانة شاملة لسيارتك",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon.ico.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e40af" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
