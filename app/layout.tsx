import type { Metadata, Viewport } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: ["300", "400", "500", "700", "900"], subsets: ["latin"], display: "swap" });

const cond = Roboto_Condensed({ weight: ["500", "700"], subsets: ["latin"], display: "swap", variable: "--font-cond" });

export const metadata: Metadata = {
  title: "YOSA – Youth Opportunities South Africa",
  description:
    "YOSA helps young people in Soweto build learning, life and digital skills, while strengthening the schools, families and communities around them. Start a partnership conversation.",
  openGraph: { title: "YOSA – Helping young people build brighter futures", type: "website" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#1b1b1f" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><noscript><style>{".rv{opacity:1!important;transform:none!important}"}</style></noscript></head>
      <body suppressHydrationWarning className={`${roboto.className} ${cond.variable}`}>{children}</body>
    </html>
  );
}
