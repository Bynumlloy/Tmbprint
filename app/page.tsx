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
// New design tokens — "Midnight & Sand"
// A refined, editorial palette: deep slate, warm ivory, and copper accents.
// ---------------------------------------------------------------------------
const theme = {
  bg: "#FAF8F5",
  surface: "#FFFFFF",
  primary: "#0F172A",
  accent: "#C9A87C",
  accentDeep: "#A68B5C",
  secondary: "#8B9D83",
  text: "#1E293B",
  muted: "#64748B",
  border: "#E2E8F0",
  whatsapp: "#25D366",
  telegram: "#0088CC",
};

// Decorative divider
function SectionDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, margin: "32px 0" }}>
      <div style={{ height: 1, width: 40, background: theme.border }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: theme.accent }} />
      <div style={{ height: 1, width: 40, background: theme.border }} />
    </div>
  );
}

// Pillar icons — refined stroke weight
function PillarIcon({ kind }: { kind: "seed" | "hourglass" | "sprout" }) {
  const common = { width: 24, height: 24, stroke: theme.primary, strokeWidth: 1.5, fill: "none" as const };
  if (kind === "seed") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M12 3c4.5 2.5 7 6 7 10.5a7.5 7.5 0 0 1-15 0C4 9 6.5 5.5 12 3Z" strokeLinejoin="round" />
        <path d="M12 9v10" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "hourglass") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M6 3h12M6 21h12M6 3c0 5.5 11 5.5 11 8.5S6 17 6 20.5" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" {...common}>
      <path d="M12 20V10" strokeLinecap="round" />
      <path d="M12 10c0-3.5-2.5-5.5-6-5.5 0 3.5 2.5 5.5 6 5.5Zm0 0c0-4 2.5-6 6-6 0 4-2.5 6-6 6Z" strokeLinejoin="round" />
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
        background: theme.bg,
        display: "flex",
        justifyContent: "center",
        fontFamily: "var(--font-body), sans-serif",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html,body{ margin:0; padding:0; background:${theme.bg}; overflow-x:hidden; }
            a:focus-visible, button:focus-visible { outline: 2px solid ${theme.accentDeep}; outline-offset: 3px; border-radius: 14px; }
            @media (prefers-reduced-motion: no-preference) {
              .fade-up { animation: fadeUp .7s cubic-bezier(.22,1,.36,1) both; }
              .fade-up-delay-1 { animation: fadeUp .7s cubic-bezier(.22,1,.36,1) .1s both; }
              .fade-up-delay-2 { animation: fadeUp .7s cubic-bezier(.22,1,.36,1) .2s both; }
            }
            @keyframes fadeUp { from { opacity:0; transform: translateY(16px);} to { opacity:1; transform:none; } }
          `,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 480,
          minHeight: "100vh",
          background: theme.bg,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Hero */}
        <div style={{ position: "relative", width: "100%", height: 280 }}>
          <Image src="/banner.jpg" alt="Acme MTC Guild" fill priority style={{ objectFit: "cover" }} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to bottom, rgba(15,23,42,0) 30%, rgba(15,23,42,.6) 70%, ${theme.bg} 100%)`,
            }}
          />
        </div>

        {/* Name card */}
        <div style={{ padding: "0 24px", marginTop: -40, position: "relative", zIndex: 2 }}>
          <div
            className="fade-up"
            style={{
              background: theme.surface,
              borderRadius: 24,
              padding: "24px 28px",
              boxShadow: "0 8px 32px rgba(15,23,42,0.08)",
              textAlign: "center",
              border: `1px solid ${theme.border}`,
            }}
          >
            <p
              style={{
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: theme.accentDeep,
                fontWeight: 600,
                margin: "0 0 8px",
              }}
            >
              Retirement &amp; Investment Guidance
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display), serif",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: 32,
                lineHeight: 1.1,
                margin: 0,
                color: theme.primary,
              }}
            >
              Acme <span style={{ color: theme.accent, fontStyle: "normal" }}>MTC</span> Guild
            </h1>
          </div>
        </div>

        <div style={{ padding: "32px 24px 0" }}>

          {/* ─── Contact Us ─── */}
          <section className="fade-up-delay-1" style={{ marginBottom: 8 }}>
            <h2
              style={{
                fontFamily: "var(--font-display), serif",
                fontStyle: "italic",
                fontWeight: 600,
                color: theme.primary,
                fontSize: 24,
                textAlign: "center",
                margin: "0 0 6px",
              }}
            >
              Contact Us
            </h2>
            <p
              style={{
                textAlign: "center",
                color: theme.muted,
                fontSize: 14,
                lineHeight: 1.6,
                margin: "0 0 20px",
                maxWidth: 360,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Have questions about your retirement plan or investment strategy? 
              Reach out directly — we typically respond within a few hours.
            </p>

            {/* Contact buttons */}
            <div style={{ display: "flex", gap: 12, marginBottom: 36 }}>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                style={{
                  flex: 1,
                  background: theme.whatsapp,
                  color: "#fff",
                  padding: "14px 16px",
                  borderRadius: 16,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  boxShadow: "0 4px 16px rgba(37,211,102,0.25)",
                  transition: "transform 0.2s ease",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
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
                  padding: "14px 16px",
                  borderRadius: 16,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  boxShadow: "0 4px 16px rgba(0,136,204,0.25)",
                  transition: "transform 0.2s ease",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.03-.75 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.19z" />
                </svg>
                Telegram
              </Link>
            </div>
          </section>

          <SectionDivider />

          {/* ─── About ─── */}
          <section className="fade-up-delay-2" style={{ marginBottom: 8 }}>
            <h2
              style={{
                fontFamily: "var(--font-display), serif",
                fontStyle: "italic",
                fontWeight: 600,
                color: theme.primary,
                fontSize: 24,
                textAlign: "center",
                margin: "0 0 6px",
              }}
            >
              About Us
            </h2>
            <p style={{ textAlign: "center", color: theme.muted, fontSize: 13, margin: "0 0 20px" }}>
              Who we are and what drives us.
            </p>

            <div
              style={{
                background: theme.surface,
                borderRadius: 20,
                padding: "24px",
                border: `1px solid ${theme.border}`,
                boxShadow: "0 2px 12px rgba(15,23,42,0.04)",
              }}
            >
              <p
                style={{
                  color: theme.text,
                  fontSize: 15,
                  lineHeight: 1.8,
                  textAlign: "center",
                  margin: 0,
                }}
              >
                We&apos;re a global community based in the United States, with members
                from many cultures and countries. Our focus is personalized
                retirement planning and strategic investment guidance — clear,
                client-first, and built for the long run.
              </p>
            </div>
          </section>

          <SectionDivider />

          {/* ─── Framework ─── */}
          <section style={{ marginBottom: 8 }}>
            <h2
              style={{
                fontFamily: "var(--font-display), serif",
                fontStyle: "italic",
                fontWeight: 600,
                color: theme.primary,
                fontSize: 24,
                textAlign: "center",
                margin: "0 0 6px",
              }}
            >
              The MTC Framework
            </h2>
            <p style={{ textAlign: "center", color: theme.muted, fontSize: 13, margin: "0 0 22px" }}>
              Three things, tended in order.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {pillars.map((p) => (
                <div
                  key={p.title}
                  style={{
                    background: theme.surface,
                    borderRadius: 20,
                    padding: "20px 22px",
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    textAlign: "left",
                    border: `1px solid ${theme.border}`,
                    boxShadow: "0 2px 12px rgba(15,23,42,0.04)",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      background: theme.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      border: `1px solid ${theme.border}`,
                    }}
                  >
                    <PillarIcon kind={p.icon} />
                  </div>
                  <div>
                    <h3 style={{ margin: "2px 0 6px", fontSize: 15, fontWeight: 700, color: theme.primary }}>{p.title}</h3>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: theme.muted }}>{p.copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                color: theme.muted,
                fontSize: 14,
                lineHeight: 1.7,
                textAlign: "center",
                margin: "28px 0 0",
                fontStyle: "italic",
              }}
            >
              Whether you&apos;re nearing retirement, exploring options, or
              following an established plan, Acme MTC Guild keeps you
              grounded in what matters.
            </p>
          </section>
        </div>

        <div style={{ flex: 1 }} />

        {/* Footer */}
        <footer
          style={{
            background: theme.primary,
            padding: "28px 24px",
            textAlign: "center",
            marginTop: 40,
            borderRadius: "24px 24px 0 0",
          }}
        >
          <p style={{ color: theme.accent, fontSize: 13, margin: "0 0 6px", fontWeight: 600, letterSpacing: 0.5 }}>
            +1 (929) 607‑2719
          </p>
          <p style={{ color: "rgba(201,168,124,0.5)", fontSize: 11, margin: 0 }}>
            &copy; {new Date().getFullYear()} Acme MTC Guild. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
