import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "NOVYTH | AI Creative Studio for Modern Brands",

  description:
    "AI-native creative studio creating cinematic commercials, product advertisements and social-first content for modern brands.",

  openGraph: {
    title: "NOVYTH | AI Creative Studio",
    description:
      "Cinematic commercials, product ads and social-first content powered by AI.",
    url: "https://novyth.org",
    siteName: "NOVYTH",
    images: [
      {
        url: "https://novyth.org/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
