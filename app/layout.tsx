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
  title: "The Retire Wealthy Guides",
  description: "Join our daily tips channels .",
  keywords: [" Retire", "Wealth Guides", "Finance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      {/* Changed 'bg-gray-50' to 'bg-[#f5f2eb]' so the base body layer matches your cream theme perfectly */}
      <body className={`${inter.variable} font-sans antialiased bg-[#f5f2eb] text-gray-900 min-h-full m-0 p-0`}>
        {children}
      </body>
    </html>
  );
}
