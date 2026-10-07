
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YOSA – Youth Opportunities South Africa",
  description:
    "YOSA helps young people in Soweto build learning, life and digital skills, while strengthening the schools, families and communities around them. Start a partnership conversation.",
  openGraph: {
    title: "YOSA – Helping young people build brighter futures",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b1b1f",
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
          <style>
            {`.rv{opacity:1!important;transform:none!important}`}
          </style>
        </noscript>
      </head>

      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

