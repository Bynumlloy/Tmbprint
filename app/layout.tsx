import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Optimize and load the Inter font family (body text, small labels)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter",
});

// Bold serif display font for the main heading (matches brand banner)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
});

// SEO and Page Metadata
export const metadata: Metadata = {
  title: "AcmeMTCGuild.com | Learn, Earn, and Inspire",
  description:
    "Personalized retirement planning and strategic investment guidance. Build lasting wealth through our proven MTC framework.",
  keywords:
    "AcmeMTCGuild, retirement planning, investment guidance, wealth building, financial planning, MTC framework",
  authors: [{ name: "AcmeMTCGuild.com" }],
  openGraph: {
    title: "AcmeMTCGuild.com | Learn, Earn, and Inspire",
    description:
      "Personalized retirement planning and strategic investment guidance",
    url: "https://acmemtcguild.com",
    siteName: "AcmeMTCGuild.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#f5f2eb] text-gray-900 min-h-full m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}
