import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thesmartmoneyblueprint.vip"),

  title: "TheSmartMoneyBlueprint.vip | Learn, Earn, and Inspire",

  description:
    "Personalized retirement planning and strategic investment guidance. Build lasting wealth through our proven framework.",

  keywords: [
    "TheSmartMoneyBlueprint",
    "retirement planning",
    "investment guidance",
    "wealth building",
    "financial planning",
    "smart money",
  ],

  authors: [{ name: "TheSmartMoneyBlueprint.vip" }],

  openGraph: {
    title: "TheSmartMoneyBlueprint.vip | Learn, Earn, and Inspire",

    description:
      "Personalized retirement planning and strategic investment guidance. Build lasting wealth through our proven framework.",

    url: "https://www.thesmartmoneyblueprint.vip",

    siteName: "TheSmartMoneyBlueprint.vip",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TheSmartMoneyBlueprint.vip Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "TheSmartMoneyBlueprint.vip | Learn, Earn, and Inspire",

    description:
      "Personalized retirement planning and strategic investment guidance. Build lasting wealth through our proven framework.",

    images: ["/og-image.png"],
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
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#0c1622] text-gray-100 min-h-full m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}
