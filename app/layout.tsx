import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Optimize and load the Inter font family
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

// SEO and Page Metadata
export const metadata: Metadata = {
  title: "Frugal Living and Budget Mastery",
  description: "Join our trading channel and membership to master your budget and discover frugal living strategies.",
  keywords: ["Frugal Living", "Budget Mastery", "Trading Channel", "Finance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50 text-gray-900 min-h-full`}>
        {children}
      </body>
    </html>
  );
}
