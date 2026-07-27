import Image from "next/image";
import Link from "next/link";
import { neon } from "@neondatabase/serverless";
import { Fraunces, Figtree } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const sql = neon(process.env.DATABASE_URL);

async function getLinks() {
  try {
    const rows = await sql`SELECT whatsapp_url, telegram_url FROM site_links WHERE id = 1`;
    const row = rows[0];
    return {
      whatsapp: row?.whatsapp_url || "https://wa.link/b21m33",
      telegram: row?.telegram_url || "https://t.me/KatieMTC",
    };
  } catch {
    return {
      whatsapp: "https://wa.link/b21m33",
      telegram: "https://t.me/KatieMTC",
    };
  }
}

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// Design tokens
// A cream + moss + honey "garden" palette: money that's tended and grown
// over time, rather than a generic finance dark-mode or terracotta default.
// ---------------------------------------------------------------------------
const theme = {
  cream: "#FBF7EC",
  creamSoft: "#F3EEDF",
  moss: "#35492F",
  mossDeep: "#243120",
  sage: "#C7D6A6",
  sageSoft: "#E3EAD0",
  honey: "#D8A13A",
  honeyDeep: "#B5822A",
  ink: "#26301F",
  inkMuted: "#5B6653",
  whatsapp: "#2FA36B",
  telegram: "#2E7FB8",
};

// A single hand-drawn "growth line" that threads under the three pillars —
// the one signature motif for the page.
function GrowthLine() {
  return (
    <svg
      viewBox="0 0 320 60"
      fill="none"
      style={{ width: "100%", height: 44, display: "block" }}
      preserveAspectRatio="none"
    >
      <path
        d="M4 46 C 60 46, 70 14, 108 18 C 150 22, 150 46, 200 40 C 240 35, 250 12, 316 14"
        stroke={theme.honey}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 9"
      />
      <circle cx="4" cy="46" r="4" fill={theme.moss} />
      <circle cx="108" cy="18" r="4" fill={theme.moss} />
      <circle cx="316" cy="14" r="4" fill={theme.honey} />
    </svg>
  );
}

function PillarIcon({ kind }: { kind: "seed" | "hourglass" | "sprout" }) {
  const common = { width: 26, height: 26, stroke: theme.moss, strokeWidth: 1.6, fill: "none" as const };
  if (kind === "seed") {
    return (
      <svg viewBox="0 0 26 26" {...common}>
        <path d="M13 4c5 3 8 7 8 12a8 8 0 0 1-16 0c0-5 3-9 8-12Z" strokeLinejoin="round" />
        <path d="M13 10v10" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "hourglass") {
    return (
      <svg viewBox="0 0 26 26" {...common}>
        <path d="M7 4h12M7 22h12M7 4c0 6 12 6 12 9s-12 3-12 9M19 4c0 6-12 6-12 9s12 3 12 9" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 26 26" {...common}>
      <path d="M13 22V12" strokeLinecap="round" />
      <path d="M13 12c0-4-3-6-7-6 0 4 3 6 7 6Zm0 0c0-5 3-7 7-7 0 5-3 7-7 7Z" strokeLinejoin="round" />
    </svg>
  );
}

export default async function Home() {
  const { whatsapp: WHATSAPP_URL, telegram: TELEGRAM_URL } = await getLinks();

  const pillars = [
    {
      icon: "seed" as const,
      title: "Mindset",
      copy: "Patience and discipline first — the habits that let a plan actually work.",
    },
    {
      icon: "hourglass" as const,
      title: "Time",
      copy: "Consistency and compounding, given room to do the slow, quiet work.",
    },
    {
      icon: "sprout" as const,
      title: "Capital",
      copy: "Resources put to work across diversified, deliberate strategies.",
    },
  ];

  return (
    <main
      className={`${fraunces.variable} ${figtree.variable}`}
      style={{
        minHeight: "100vh",
        width: "100%",
        background: theme.cream,
        display: "flex",
        justifyContent: "center",
        fontFamily: "var(--font-body), sans-serif",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html,body{ margin:0; padding:0; background:${theme.cream}; overflow-x:hidden; }
            a:focus-visible, button:focus-visible { outline: 2px solid ${theme.honeyDeep}; outline-offset: 2px; }
            @media (prefers-reduced-motion: no-preference) {
              .fade-up { animation: fadeUp .6s ease both; }
            }
            @keyframes fadeUp { from { opacity:0; transform: translateY(10px);} to { opacity:1; transform:none; } }
          `,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 460,
          minHeight: "100vh",
          background: theme.cream,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Hero */}
        <div style={{ position: "relative", width: "100%", height: 260 }}>
          <Image src="/banner.jpg" alt="Acme MTC Guild" fill priority style={{ objectFit: "cover" }} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to bottom, rgba(36,49,32,0) 45%, rgba(36,49,32,.55) 78%, ${theme.cream} 100%)`,
            }}
          />
        </div>

        {/* Name card overlapping the hero */}
        <div style={{ padding: "0 24px", marginTop: -34, position: "relative", zIndex: 2 }}>
          <div
            className="fade-up"
            style={{
              background: theme.cream,
              borderRadius: 20,
              padding: "18px 22px",
              boxShadow: "0 10px 30px rgba(38,48,31,0.12)",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontFamily: "var(--font-display), serif",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: 30,
                lineHeight: 1.15,
                margin: 0,
                color: theme.ink,
              }}
            >
              Acme <span style={{ color: theme.honeyDeep, fontStyle: "normal" }}>MTC</span> Guild
            </h1>
            <p style={{ margin: "8px 0 0", fontSize: 13, letterSpacing: 0.4, color: theme.inkMuted, textTransform: "uppercase" }}>
              Retirement &amp; investment guidance, grown with you
            </p>
          </div>
        </div>

        <div style={{ padding: "28px 24px 0" }}>
          <p style={{ color: theme.inkMuted, fontSize: 15, lineHeight: 1.75, textAlign: "center", margin: "0 0 26px" }}>
            We're a global community based in the United States, with members
            from many cultures and countries. Our focus is personalized
            retirement planning and strategic investment guidance — clear,
            client-first, and built for the long run.
          </p>

          {/* Contact buttons */}
          <div style={{ display: "flex", gap: 10, marginBottom: 40 }}>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              style={{
                flex: 1,
                background: theme.whatsapp,
                color: "#fff",
                padding: "13px 14px",
                borderRadius: 14,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                boxShadow: "0 6px 16px rgba(47,163,107,0.28)",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.516 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.66.986 3.288 1.474 4.825 1.475 5.4 0 9.795-4.39 9.798-9.789.002-2.618-1.017-5.08-2.87-6.934C16.49 2.052 14.04 1.029 11.5 1.029c-5.402 0-9.8 4.393-9.803 9.792-.001 1.629.433 3.219 1.258 4.631l-.995 3.635 3.731-.977zm12.181-5.395c-.303-.151-1.793-.884-2.071-.985-.279-.101-.482-.151-.684.151-.202.303-.783.985-.96 1.187-.177.202-.354.227-.657.076-1.396-.698-2.3-1.226-3.21-2.78-.24-.411.24-.382.687-1.275.076-.151.038-.284-.019-.39-.057-.101-.482-1.161-.66-1.589-.173-.417-.348-.36-.482-.367-.124-.006-.266-.007-.407-.007-.141 0-.37.053-.564.266-.194.213-.74.723-.74 1.761 0 1.038.754 2.039.859 2.181.106.142 1.484 2.266 3.597 3.177 1.472.635 2.12.723 2.879.614.475-.068 1.455-.595 1.658-1.167.202-.572.202-1.061.142-1.161-.06-.1-.22-.151-.523-.303z" />
              </svg>
              WhatsApp
            </Link>

            <Link
              href={TELEGRAM_URL}
              target="_blank"
              style={{
                flex: 1,
                background: theme.telegram,
                color: "#fff",
                padding: "13px 14px",
                borderRadius: 14,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                boxShadow: "0 6px 16px rgba(46,127,184,0.28)",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.03-.75 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.19z" />
              </svg>
              Telegram
            </Link>
          </div>

          {/* Framework */}
          <section style={{ marginBottom: 8 }}>
            <h2
              style={{
                fontFamily: "var(--font-display), serif",
                fontStyle: "italic",
                fontWeight: 600,
                color: theme.ink,
                fontSize: 22,
                textAlign: "center",
                margin: "0 0 6px",
              }}
            >
              The MTC Framework
            </h2>
            <p style={{ textAlign: "center", color: theme.inkMuted, fontSize: 13, margin: "0 0 18px" }}>
              Three things, tended in order.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {pillars.map((p, i) => (
                <div key={p.title}>
                  <div
                    style={{
                      background: theme.sageSoft,
                      borderRadius: 16,
                      padding: "16px 18px",
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        background: theme.cream,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <PillarIcon kind={p.icon} />
                    </div>
                    <div>
                      <h3 style={{ margin: "2px 0 4px", fontSize: 15, fontWeight: 700, color: theme.ink }}>{p.title}</h3>
                      <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: theme.inkMuted }}>{p.copy}</p>
                    </div>
                  </div>
                  {i < pillars.length - 1 && (
                    <div style={{ padding: "2px 18px" }}>
                      <GrowthLine />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p style={{ color: theme.inkMuted, fontSize: 13.5, lineHeight: 1.7, textAlign: "center", margin: "22px 0 0" }}>
              Whether you're nearing retirement, exploring options, or
              following an established plan, Acme MTC Guild keeps you
              grounded in what matters.
            </p>
          </section>
        </div>

        <div style={{ flex: 1 }} />

        <footer
          style={{
            background: theme.mossDeep,
            padding: "22px 24px",
            textAlign: "center",
            marginTop: 36,
          }}
        >
          <p style={{ color: theme.sage, fontSize: 13, margin: "0 0 6px", fontWeight: 600 }}>
            📞 +1 (929) 607‑2719
          </p>
          <p style={{ color: "rgba(231,235,216,0.55)", fontSize: 11, margin: 0 }}>
            © {new Date().getFullYear()} Acme MTC Guild. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
