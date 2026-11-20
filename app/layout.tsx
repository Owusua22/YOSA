import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/newsreader";
import "@fontsource-variable/newsreader/standard-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://youthopportunitiessouthafrica.org"),
  title: "YOSA — Youth Opportunities South Africa",
  description:
    "YOSA helps young people in Soweto build learning, life and digital skills, while strengthening the schools, families and communities around them. Start a partnership conversation.",
  openGraph: {
    title: "YOSA — Helping young people build brighter futures",
    description:
      "Learning support, psychosocial services and digital innovation inside Soweto schools, with measurable outcomes.",
    type: "website",
    images: ["/photos/hero.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111110",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <noscript>
          <style>{`.rv{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
