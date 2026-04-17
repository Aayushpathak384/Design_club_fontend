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
  title: "IETE HIT Haldia | Build. Learn. Grow.",
  description: "IETE HIT Haldia Student Forum - Empowering students through workshops on robotics, web development, interactive sessions, and technical events like Robiteka. Join our community!",
  keywords: ["IETE", "HIT Haldia", "technical society", "robotics", "web development", "Robiteka", "ECE", "workshops"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
