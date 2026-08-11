import Image from "next/image";
import Link from "next/link";
import { neon } from "@neondatabase/serverless";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

const sql = neon(process.env.DATABASE_URL!);

async function getLinks() {
  try {
    const rows =
      await sql`SELECT whatsapp_url, telegram_url, whatsapp_number, telegram_username FROM site_links WHERE id = 1`;

    const row = rows[0];

    return {
      whatsapp:
        row?.whatsapp_url || "https://wa.link/b21m33",
      telegram:
        row?.telegram_url || "https://t.me/KatieMTC",
      whatsappNumber:
        row?.whatsapp_number || "+1 (929) 607-2719",
      telegramUsername:
        row?.telegram_username || "@KatieMTC",
    };
  } catch {
    return {
      whatsapp: "https://wa.link/b21m33",
      telegram: "https://t.me/KatieMTC",
      whatsappNumber: "+1 (929) 607-2719",
      telegramUsername: "@KatieMTC",
    };
  }
}

export const dynamic = "force-dynamic";

const theme = {
  navy: "#071A2B",
  navyLight: "#0D263B",
  gold: "#C9A35B",
  goldLight: "#E2C789",
  cream: "#F5EAD4",      // warmer, amber-sand — pulls from the sunset golds
  creamDark: "#EDE0C8",  // slightly deeper warm sand for philosophy section
  text: "#1A2330",
  muted: "#6B7A6A",      // warmer muted — less blue-grey
  line: "#D9CCAF",       // warm divider
  white: "#FFFFFF",
  whatsapp: "#25D366",
  telegram: "#229ED9",
};

function ArrowIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 19L19 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 5H19V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.5 3.5A11.9 11.9 0 0 0 12.04 0C5.47 0 .13 5.34.13 11.91c0 2.1.55 4.15 1.6 5.96L.04 24l6.28-1.65a11.88 11.88 0 0 0 5.71 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.18-3.44-8.41ZM12.04 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.88 9.88 0 0 1-1.52-5.28C2.14 6.43 6.57 2 12.04 2c2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.9 7c0 5.47-4.44 9.9-9.91 9.9Z" />
      <path d="M17.55 14.52c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.9 3.2 18.5 20c-.26 1.19-.97 1.48-1.97.92l-5.43-4-2.62 2.52c-.29.29-.53.53-1.09.53l.39-5.52 10.05-9.08c.44-.39-.1-.61-.68-.22L4.73 12.2l-5.38-1.68c-1.17-.37-1.19-1.17.24-1.73L20.62.81c.98-.36 1.84.24 1.28 2.39Z" />
    </svg>
  );
}

export default async function Home() {
  const {
    whatsapp: WHATSAPP_URL,
    telegram: TELEGRAM_URL,
    whatsappNumber,
    telegramUsername,
  } = await getLinks();

  return (
    <main className={`${display.variable} ${body.variable}`}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            * {
              box-sizing: border-box;
            }

            html {
              scroll-behavior: smooth;
            }

            html,
            body {
              margin: 0;
              padding: 0;
              background: ${theme.cream};
            }

            body {
              font-family: var(--font-body), sans-serif;
              color: ${theme.text};
            }

            a {
              color: inherit;
            }

            a:focus-visible {
              outline: 3px solid ${theme.gold};
              outline-offset: 3px;
            }

            .page {
              width: 100%;
              min-height: 100vh;
              overflow-x: hidden;
              background: ${theme.cream};
            }

            /* =========================================
               BRAND BAR
            ========================================= */

            .brand-bar {
              background: ${theme.navy};
              color: white;
              padding: 17px 20px;
            }

            .brand-bar-inner {
              width: min(100%, 760px);
              margin: 0 auto;
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 20px;
            }

            .brand {
              display: flex;
              align-items: center;
              gap: 10px;
              text-decoration: none;
            }

            .brand-mark {
              width: 31px;
              height: 31px;
              display: grid;
              place-items: center;
              border: 1px solid ${theme.gold};
              color: ${theme.goldLight};
              font-family: var(--font-display), serif;
              font-size: 17px;
              font-weight: 700;
            }

            .brand-name {
              font-size: 10px;
              font-weight: 800;
              letter-spacing: 2.2px;
              text-transform: uppercase;
            }

            .brand-link {
              color: ${theme.goldLight};
              text-decoration: none;
              font-size: 10px;
              font-weight: 800;
              letter-spacing: 1.5px;
              text-transform: uppercase;
            }

            /* =========================================
               HERO IMAGE — with bottom fade
            ========================================= */

            .hero {
              width: 100%;
              background: ${theme.navy};
              position: relative;
              line-height: 0;
            }

            .hero-image {
              display: block;
              width: 100%;
              height: auto;
              object-fit: contain;
            }

            /* Gradient overlay that fades the bottom of the image into the warm sand background.
               The amber mid-stop echoes the sunset's golden tones so the transition feels
               continuous rather than cut off. */
            .hero-fade {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 42%;
              background: linear-gradient(
                to bottom,
                transparent 0%,
                rgba(210, 155, 70, 0.08) 30%,
                rgba(220, 168, 90, 0.28) 55%,
                rgba(235, 195, 120, 0.62) 75%,
                ${theme.cream} 100%
              );
              pointer-events: none;
            }

            /* =========================================
               INTRO  (now includes contact buttons)
            ========================================= */

            .intro {
              padding: 56px 22px 72px;
              background: ${theme.cream};
              text-align: center;
            }

            .content-width {
              width: min(760px, 100%);
              margin: 0 auto;
            }

            .eyebrow {
              margin-bottom: 16px;
              color: ${theme.gold};
              font-size: 10px;
              font-weight: 800;
              letter-spacing: 3px;
              text-transform: uppercase;
            }

            .intro h1 {
              margin: 0 auto;
              max-width: 680px;
              color: ${theme.navy};
              font-family: var(--font-display), serif;
              font-size: clamp(42px, 8vw, 65px);
              line-height: .98;
              font-weight: 600;
            }

            .intro h1 em {
              color: ${theme.gold};
              font-style: italic;
            }

            .intro p {
              max-width: 625px;
              margin: 25px auto 0;
              color: ${theme.muted};
              font-size: 14px;
              line-height: 1.9;
            }

            /* =========================================
               CONTACT PILL BUTTONS (inside cream)
            ========================================= */

            .contact-pills {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 10px;
              flex-wrap: wrap;
              margin-top: 30px;
            }

            .pill {
              display: inline-flex;
              align-items: center;
              gap: 7px;
              height: 40px;
              padding: 0 18px;
              border-radius: 100px;
              text-decoration: none;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 0.5px;
              white-space: nowrap;
              transition:
                transform 0.18s ease,
                box-shadow 0.18s ease,
                opacity 0.18s ease;
            }

            .pill:hover {
              transform: translateY(-2px);
              opacity: 0.92;
            }

            .pill-icon {
              display: grid;
              place-items: center;
              flex-shrink: 0;
            }

            .pill.whatsapp {
              background: ${theme.whatsapp};
              color: white;
              box-shadow: 0 3px 14px rgba(37, 211, 102, 0.22);
            }

            .pill.telegram {
              background: ${theme.telegram};
              color: white;
              box-shadow: 0 3px 14px rgba(34, 158, 217, 0.22);
            }

            .pill-label {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              line-height: 1;
            }

            .pill-label strong {
              font-size: 11px;
              font-weight: 700;
            }

            .pill-sub {
              font-size: 9px;
              font-weight: 500;
              opacity: 0.82;
              margin-top: 2px;
            }

            /* =========================================
               THREE PILLARS
            ========================================= */

            .pillars {
              background: ${theme.navy};
              color: white;
              padding: 75px 22px;
            }

            .section-width {
              width: min(900px, 100%);
              margin: 0 auto;
            }

            .dark-eyebrow {
              color: ${theme.goldLight};
              font-size: 10px;
              font-weight: 800;
              letter-spacing: 3px;
              text-transform: uppercase;
            }

            .pillars-title {
              margin: 15px 0 42px;
              max-width: 620px;
              font-family: var(--font-display), serif;
              font-size: clamp(40px, 7vw, 58px);
              line-height: .98;
              font-weight: 600;
            }

            .pillar-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              border-top: 1px solid ${theme.line};
              border-bottom: 1px solid ${theme.line};
            }

            .pillar {
              min-height: 285px;
              padding: 30px 25px;
              border-right: 1px solid ${theme.line};
            }

            .pillar:last-child {
              border-right: 0;
            }

            .pillar-number {
              width: 39px;
              height: 39px;
              margin-bottom: 42px;
              display: grid;
              place-items: center;
              border: 1px solid ${theme.gold};
              color: ${theme.goldLight};
              font-family: var(--font-display), serif;
              font-size: 19px;
            }

            .pillar h2 {
              margin: 0 0 12px;
              color: white;
              font-family: var(--font-display), serif;
              font-size: 31px;
              line-height: 1;
              font-weight: 600;
            }

            .pillar p {
              margin: 0;
              color: rgba(255,255,255,.62);
              font-size: 12.5px;
              line-height: 1.8;
            }

            /* =========================================
               PHILOSOPHY
            ========================================= */

            .philosophy {
              background: ${theme.creamDark};
              padding: 76px 22px;
            }

            .philosophy-grid {
              width: min(900px, 100%);
              margin: 0 auto;
              display: grid;
              grid-template-columns: .8fr 1.2fr;
              gap: 70px;
              align-items: start;
            }

            .philosophy h2 {
              margin: 14px 0 0;
              color: ${theme.navy};
              font-family: var(--font-display), serif;
              font-size: clamp(43px, 7vw, 63px);
              line-height: .92;
              font-weight: 600;
            }

            .philosophy h2 em {
              color: ${theme.gold};
              font-style: italic;
            }

            .philosophy-copy {
              margin: 0 0 27px;
              color: ${theme.muted};
              font-size: 14px;
              line-height: 1.9;
            }

            .principle {
              display: flex;
              gap: 14px;
              align-items: flex-start;
              padding: 16px 0;
              border-top: 1px solid rgba(23,37,53,.13);
            }

            .principle:last-child {
              border-bottom: 1px solid rgba(23,37,53,.13);
            }

            .check {
              width: 19px;
              height: 19px;
              flex: 0 0 19px;
              border: 1px solid ${theme.gold};
              border-radius: 50%;
              display: grid;
              place-items: center;
              color: ${theme.gold};
              font-size: 10px;
              margin-top: 1px;
            }

            .principle span {
              color: ${theme.navy};
              font-size: 12px;
              line-height: 1.55;
              font-weight: 700;
            }

            /* =========================================
               SECOND CTA
            ========================================= */

            .cta {
              background: ${theme.navyLight};
              color: white;
              padding: 80px 22px;
              text-align: center;
            }

            .cta h2 {
              max-width: 680px;
              margin: 15px auto 18px;
              font-family: var(--font-display), serif;
              font-size: clamp(43px, 8vw, 68px);
              line-height: .94;
              font-weight: 600;
            }

            .cta h2 em {
              color: ${theme.goldLight};
              font-style: italic;
            }

            .cta p {
              max-width: 560px;
              margin: 0 auto 30px;
              color: rgba(255,255,255,.63);
              font-size: 13.5px;
              line-height: 1.85;
            }

            .cta-buttons {
              display: flex;
              justify-content: center;
              gap: 11px;
              flex-wrap: wrap;
            }

            .cta-button {
              min-width: 190px;
              min-height: 49px;
              padding: 13px 18px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              text-decoration: none;
              font-size: 11px;
              font-weight: 800;
              letter-spacing: 1.1px;
              text-transform: uppercase;
              transition: transform .2s ease;
            }

            .cta-button:hover {
              transform: translateY(-2px);
            }

            .cta-button.primary {
              background: ${theme.gold};
              color: ${theme.navy};
            }

            .cta-button.secondary {
              border: 1px solid rgba(255,255,255,.28);
              color: white;
            }

            /* =========================================
               FOOTER
            ========================================= */

            footer {
              padding: 30px 22px;
              background: #04131F;
              text-align: center;
            }

            .footer-name {
              margin-bottom: 8px;
              color: ${theme.goldLight};
              font-family: var(--font-display), serif;
              font-size: 21px;
              font-weight: 600;
            }

            .footer-copy {
              max-width: 600px;
              margin: 0 auto;
              color: rgba(255,255,255,.4);
              font-size: 9.5px;
              line-height: 1.7;
            }

            /* =========================================
               MOBILE
            ========================================= */

            @media (max-width: 650px) {
              .brand-bar {
                padding: 14px 15px;
              }

              .brand-link {
                display: none;
              }

              .intro {
                padding: 48px 20px 60px;
              }

              .contact-pills {
                flex-direction: column;
                align-items: stretch;
                max-width: 280px;
                margin-left: auto;
                margin-right: auto;
              }

              .pill {
                justify-content: center;
              }

              .pillars {
                padding: 64px 20px;
              }

              .pillar-grid {
                display: block;
              }

              .pillar {
                min-height: auto;
                padding: 28px 0;
                border-right: 0;
                border-bottom: 1px solid ${theme.line};
              }

              .pillar:last-child {
                border-bottom: 0;
              }

              .pillar-number {
                margin-bottom: 25px;
              }

              .philosophy {
                padding: 64px 20px;
              }

              .philosophy-grid {
                display: block;
              }

              .philosophy-copy-wrap {
                margin-top: 42px;
              }

              .cta {
                padding: 65px 20px;
              }

              .cta-buttons {
                flex-direction: column;
              }

              .cta-button {
                width: 100%;
              }
            }

            @media (prefers-reduced-motion: no-preference) {
              .fade-up {
                animation: fadeUp .7s cubic-bezier(.22,1,.36,1) both;
              }

              @keyframes fadeUp {
                from {
                  opacity: 0;
                  transform: translateY(14px);
                }

                to {
                  opacity: 1;
                  transform: none;
                }
              }
            }
          `,
        }}
      />

      <div className="page">

        {/* =========================================
            BRAND BAR
        ========================================= */}

        <header className="brand-bar">
          <div className="brand-bar-inner">

            <Link href="/" className="brand">
              <div className="brand-mark">S</div>

              <span className="brand-name">
                Smart Money Blueprint
              </span>
            </Link>

            <a href="#contact" className="brand-link">
              Connect With Us
            </a>

          </div>
        </header>

        {/* =========================================
            MAIN IMAGE — fade overlay bleeds into cream
        ========================================= */}

        <section className="hero">
          <Image
            src="/banner.jpg"
            alt="The Smart Money Blueprint — Invest. Save. Retire."
            width={1536}
            height={802}
            priority
            sizes="100vw"
            className="hero-image"
          />
          {/* Gradient that dissolves the bottom of the image into the cream background */}
          <div className="hero-fade" aria-hidden="true" />
        </section>

        {/* =========================================
            INTRODUCTION + CONTACT PILLS
        ========================================= */}

        <section className="intro">
          <div className="content-width fade-up">

            <div className="eyebrow">
              A smarter approach to money
            </div>

            <h1>
              Build wealth with
              <em> intention.</em>
            </h1>

            <p>
              The Smart Money Blueprint is about making your
              financial future easier to understand and easier
              to act on. We focus on the fundamentals that
              matter: disciplined saving, thoughtful investing,
              long-term planning, and preparing for the life
              you want to enjoy.
            </p>

            {/* Compact contact pills — live in the cream section */}
            <div className="contact-pills">

              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pill whatsapp"
              >
                <span className="pill-icon">
                  <WhatsAppIcon />
                </span>
                <span className="pill-label">
                  <strong>WhatsApp</strong>
                  <span className="pill-sub">{whatsappNumber}</span>
                </span>
                <ArrowIcon />
              </Link>

              <Link
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pill telegram"
              >
                <span className="pill-icon">
                  <TelegramIcon />
                </span>
                <span className="pill-label">
                  <strong>Telegram</strong>
                  <span className="pill-sub">{telegramUsername}</span>
                </span>
                <ArrowIcon />
              </Link>

            </div>

          </div>
        </section>

        {/* =========================================
            THREE PILLARS
        ========================================= */}

        <section className="pillars">
          <div className="section-width">

            <div className="dark-eyebrow">
              The blueprint
            </div>

            <h2 className="pillars-title">
              Three simple ideas.
              <br />
              One stronger financial future.
            </h2>

            <div className="pillar-grid">

              <article className="pillar">
                <div className="pillar-number">
                  01
                </div>

                <h2>Invest</h2>

                <p>
                  Put your money to work with purpose.
                  Understand risk, think long term, and
                  build an investment approach that fits
                  your goals.
                </p>
              </article>

              <article className="pillar">
                <div className="pillar-number">
                  02
                </div>

                <h2>Save</h2>

                <p>
                  Strong financial foundations start with
                  consistent saving. Create flexibility,
                  protect your future, and give yourself
                  room to make better decisions.
                </p>
              </article>

              <article className="pillar">
                <div className="pillar-number">
                  03
                </div>

                <h2>Retire</h2>

                <p>
                  Retirement is about more than a number.
                  Plan for income, lifestyle, independence,
                  and the freedom to enjoy the years ahead.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* =========================================
            PHILOSOPHY
        ========================================= */}

        <section className="philosophy">
          <div className="philosophy-grid">

            <div>
              <div className="eyebrow">
                Our philosophy
              </div>

              <h2>
                Less noise.
                <br />
                More <em>clarity.</em>
              </h2>
            </div>

            <div className="philosophy-copy-wrap">

              <p className="philosophy-copy">
                Money can become complicated quickly. Our
                approach starts by bringing the conversation
                back to the things you can control: your goals,
                your habits, your time horizon, and the choices
                you make consistently.
              </p>

              <div className="principle">
                <div className="check">✓</div>

                <span>
                  Understand your starting point before
                  planning your next move.
                </span>
              </div>

              <div className="principle">
                <div className="check">✓</div>

                <span>
                  Build habits that remain useful through
                  changing markets and circumstances.
                </span>
              </div>

              <div className="principle">
                <div className="check">✓</div>

                <span>
                  Think long term rather than reacting to
                  every short-term headline.
                </span>
              </div>

              <div className="principle">
                <div className="check">✓</div>

                <span>
                  Keep your financial strategy aligned with
                  the life you actually want.
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            FINAL CTA
        ========================================= */}

        <section className="cta" id="contact">
          <div className="content-width">

            <div className="dark-eyebrow">
              Start the conversation
            </div>

            <h2>
              Your future deserves a
              <em> blueprint.</em>
            </h2>

            <p>
              Whether you're beginning to invest, working on
              your savings, or preparing for retirement, a
              thoughtful conversation can be a useful first
              step.
            </p>

            <div className="cta-buttons">

              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary"
              >
                WhatsApp Us
                <ArrowIcon />
              </Link>

              <Link
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                Message on Telegram
                <ArrowIcon />
              </Link>

            </div>

          </div>
        </section>

        {/* =========================================
            FOOTER
        ========================================= */}

        <footer>
          <div className="footer-name">
            The Smart Money Blueprint
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} The Smart Money Blueprint.
            All rights reserved.
            <br />
            Educational information only. Financial decisions
            should be considered in light of your individual
            circumstances, objectives, and risk tolerance.
          </p>
        </footer>

      </div>
    </main>
  );
}
