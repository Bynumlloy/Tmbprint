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
  metadataBase: new URL("https://www.acmemtcguild.com"),

  title: "AcmeMTCGuild.com | Learn, Earn, and Inspire",

  description:
    "Personalized retirement planning and strategic investment guidance. Build lasting wealth through our proven MTC framework.",

  keywords: [
    "AcmeMTCGuild",
    "retirement planning",
    "investment guidance",
    "wealth building",
    "financial planning",
    "MTC framework",
  ],

  authors: [{ name: "AcmeMTCGuild.com" }],

  openGraph: {
    title: "AcmeMTCGuild.com | Learn, Earn, and Inspire",

    description:
      "Personalized retirement planning and strategic investment guidance. Build lasting wealth through our proven MTC framework.",

    url: "https://www.acmemtcguild.com",

    siteName: "AcmeMTCGuild.com",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AcmeMTCGuild.com Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "AcmeMTCGuild.com | Learn, Earn, and Inspire",

    description:
      "Personalized retirement planning and strategic investment guidance. Build lasting wealth through our proven MTC framework.",

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
