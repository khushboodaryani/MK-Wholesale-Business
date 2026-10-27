import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://mk-wholesale-egg-business.lovable.app"),
  title: "MK Egg Centre | Wholesale Egg Supplier in Itarsi, Madhya Pradesh",
  description:
    "MK Egg Centre is a family-owned wholesale egg supplier in Itarsi, Madhya Pradesh, with around 35 years of family business experience by the Daryani family. Contact us for bulk egg supply enquiries.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="font-sans bg-[#FAF8F3] text-slate-900 antialiased selection:bg-amber-600 selection:text-white pb-20 sm:pb-0 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
