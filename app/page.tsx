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
  navy2: "#0D263B",
  gold: "#C9A35B",
  goldLight: "#E0C487",
  ivory: "#F7F3EB",
  cream: "#EEE8DC",
  text: "#172535",
  muted: "#66727D",
  white: "#FFFFFF",
  line: "rgba(201,163,91,.28)",
  whatsapp: "#25D366",
  telegram: "#229ED9",
};

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 13L13 3M5 3H13V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="8" stroke={theme.gold} />
      <path
        d="M5.5 9.2L7.7 11.2L12.5 6.7"
        stroke={theme.gold}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PillarIcon({
  number,
}: {
  number: string;
}) {
  return (
    <div className="pillar-number">
      {number}
    </div>
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
    <main
      className={`${display.variable} ${body.variable}`}
    >
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
              background: ${theme.ivory};
            }

            body {
              font-family: var(--font-body), sans-serif;
              color: ${theme.text};
            }

            a {
              color: inherit;
            }

            a:focus-visible {
              outline: 2px solid ${theme.gold};
              outline-offset: 4px;
            }

            .page {
              min-height: 100vh;
              overflow: hidden;
              background: ${theme.ivory};
            }

            /* --------------------------------
               HERO
            -------------------------------- */

            .hero {
              position: relative;
              min-height: 670px;
              color: white;
              background: ${theme.navy};
              overflow: hidden;
            }

            .hero-image {
              position: absolute;
              inset: 0;
            }

            .hero-image img {
              object-fit: cover;
              object-position: center;
            }

            .hero-overlay {
              position: absolute;
              inset: 0;
              background:
                linear-gradient(
                  90deg,
                  rgba(5,20,34,.98) 0%,
                  rgba(5,20,34,.87) 34%,
                  rgba(5,20,34,.30) 70%,
                  rgba(5,20,34,.05) 100%
                ),
                linear-gradient(
                  0deg,
                  rgba(5,20,34,.90) 0%,
                  transparent 38%,
                  rgba(5,20,34,.18) 100%
                );
            }

            .hero-inner {
              position: relative;
              z-index: 2;
              width: min(1120px, calc(100% - 40px));
              min-height: 670px;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 28px 0 38px;
            }

            .topbar {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }

            .brand {
              display: flex;
              align-items: center;
              gap: 12px;
              text-decoration: none;
            }

            .brand-mark {
              width: 38px;
              height: 38px;
              border: 1px solid ${theme.gold};
              display: grid;
              place-items: center;
              color: ${theme.goldLight};
              font-family: var(--font-display), serif;
              font-size: 19px;
              font-weight: 700;
            }

            .brand-name {
              font-size: 11px;
              font-weight: 800;
              letter-spacing: 2.5px;
              text-transform: uppercase;
            }

            .nav-link {
              color: rgba(255,255,255,.78);
              text-decoration: none;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 1.8px;
              text-transform: uppercase;
            }

            .hero-content {
              max-width: 680px;
              padding-bottom: 20px;
            }

            .eyebrow {
              display: flex;
              align-items: center;
              gap: 12px;
              margin-bottom: 22px;
              color: ${theme.goldLight};
              font-size: 10px;
              font-weight: 800;
              letter-spacing: 3px;
              text-transform: uppercase;
            }

            .eyebrow::before {
              content: "";
              width: 42px;
              height: 1px;
              background: ${theme.gold};
            }

            .hero-title {
              margin: 0;
              font-family: var(--font-display), serif;
              font-size: clamp(64px, 10vw, 108px);
              line-height: .79;
              font-weight: 700;
              letter-spacing: -3px;
              text-transform: uppercase;
            }

            .hero-title span {
              display: block;
              color: ${theme.goldLight};
              font-style: italic;
              text-transform: none;
              letter-spacing: -4px;
              margin-left: 5px;
            }

            .hero-subtitle {
              max-width: 490px;
              margin: 28px 0 0;
              color: rgba(255,255,255,.78);
              font-size: 15px;
              line-height: 1.8;
            }

            .hero-bottom {
              display: flex;
              align-items: flex-end;
              justify-content: space-between;
              gap: 30px;
              padding-top: 34px;
              border-top: 1px solid rgba(255,255,255,.18);
            }

            .hero-motto {
              color: white;
              font-size: 12px;
              font-weight: 800;
              letter-spacing: 2.5px;
              text-transform: uppercase;
            }

            .hero-motto span {
              color: ${theme.goldLight};
            }

            .scroll-note {
              display: flex;
              align-items: center;
              gap: 10px;
              color: rgba(255,255,255,.55);
              font-size: 10px;
              letter-spacing: 2px;
              text-transform: uppercase;
            }

            .scroll-line {
              width: 45px;
              height: 1px;
              background: rgba(255,255,255,.4);
            }

            /* --------------------------------
               INTRO
            -------------------------------- */

            .intro {
              background: ${theme.ivory};
              padding: 90px 20px 82px;
            }

            .intro-inner {
              width: min(940px, 100%);
              margin: 0 auto;
              text-align: center;
            }

            .section-label {
              color: ${theme.gold};
              font-size: 10px;
              font-weight: 800;
              letter-spacing: 3px;
              text-transform: uppercase;
              margin-bottom: 20px;
            }

            .intro h2 {
              margin: 0 auto;
              max-width: 780px;
              font-family: var(--font-display), serif;
              font-size: clamp(38px, 6vw, 64px);
              line-height: .98;
              font-weight: 600;
              color: ${theme.navy};
            }

            .intro h2 em {
              color: ${theme.gold};
              font-style: italic;
            }

            .intro-copy {
              max-width: 640px;
              margin: 28px auto 0;
              color: ${theme.muted};
              font-size: 15px;
              line-height: 1.9;
            }

            /* --------------------------------
               PILLARS
            -------------------------------- */

            .pillars {
              background: ${theme.navy};
              color: white;
              padding: 82px 20px;
            }

            .pillars-inner {
              width: min(1000px, 100%);
              margin: 0 auto;
            }

            .dark-label {
              color: ${theme.goldLight};
              font-size: 10px;
              font-weight: 800;
              letter-spacing: 3px;
              text-transform: uppercase;
            }

            .pillars-heading {
              max-width: 600px;
              margin: 18px 0 55px;
              font-family: var(--font-display), serif;
              font-size: clamp(38px, 6vw, 58px);
              line-height: 1;
              font-weight: 600;
            }

            .pillar-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              border-top: 1px solid ${theme.line};
              border-bottom: 1px solid ${theme.line};
            }

            .pillar {
              min-height: 300px;
              padding: 34px 28px;
              border-right: 1px solid ${theme.line};
            }

            .pillar:last-child {
              border-right: 0;
            }

            .pillar-number {
              width: 42px;
              height: 42px;
              border: 1px solid ${theme.gold};
              display: grid;
              place-items: center;
              color: ${theme.goldLight};
              font-family: var(--font-display), serif;
              font-size: 20px;
              font-weight: 600;
              margin-bottom: 48px;
            }

            .pillar h3 {
              margin: 0 0 13px;
              font-family: var(--font-display), serif;
              color: white;
              font-size: 30px;
              font-weight: 600;
            }

            .pillar p {
              margin: 0;
              color: rgba(255,255,255,.62);
              font-size: 13px;
              line-height: 1.85;
            }

            /* --------------------------------
               APPROACH
            -------------------------------- */

            .approach {
              background: ${theme.cream};
              padding: 90px 20px;
            }

            .approach-inner {
              width: min(1000px, 100%);
              margin: 0 auto;
              display: grid;
              grid-template-columns: .85fr 1.15fr;
              gap: 80px;
              align-items: start;
            }

            .approach-title {
              margin: 15px 0 0;
              font-family: var(--font-display), serif;
              color: ${theme.navy};
              font-size: clamp(42px, 6vw, 64px);
              line-height: .95;
              font-weight: 600;
            }

            .approach-title em {
              color: ${theme.gold};
              font-style: italic;
            }

            .approach-copy {
              margin: 0 0 34px;
              color: ${theme.muted};
              font-size: 14px;
              line-height: 1.9;
            }

            .principle {
              display: flex;
              gap: 15px;
              padding: 17px 0;
              border-top: 1px solid rgba(23,37,53,.13);
            }

            .principle:last-child {
              border-bottom: 1px solid rgba(23,37,53,.13);
            }

            .principle strong {
              color: ${theme.navy};
              font-size: 13px;
              line-height: 1.5;
            }

            /* --------------------------------
               CTA
            -------------------------------- */

            .contact {
              position: relative;
              background: ${theme.navy2};
              color: white;
              padding: 88px 20px;
              overflow: hidden;
            }

            .contact::after {
              content: "";
              position: absolute;
              width: 420px;
              height: 420px;
              right: -180px;
              top: -180px;
              border: 1px solid rgba(201,163,91,.17);
              border-radius: 50%;
              box-shadow:
                0 0 0 70px rgba(201,163,91,.04),
                0 0 0 140px rgba(201,163,91,.025);
            }

            .contact-inner {
              position: relative;
              z-index: 1;
              width: min(820px, 100%);
              margin: 0 auto;
              text-align: center;
            }

            .contact h2 {
              margin: 15px auto 18px;
              max-width: 650px;
              font-family: var(--font-display), serif;
              font-size: clamp(44px, 7vw, 70px);
              line-height: .95;
              font-weight: 600;
            }

            .contact h2 em {
              color: ${theme.goldLight};
              font-style: italic;
            }

            .contact-copy {
              max-width: 560px;
              margin: 0 auto 34px;
              color: rgba(255,255,255,.65);
              font-size: 14px;
              line-height: 1.85;
            }

            .contact-actions {
              display: flex;
              justify-content: center;
              gap: 12px;
              flex-wrap: wrap;
            }

            .contact-button {
              min-width: 185px;
              padding: 15px 20px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 9px;
              border-radius: 0;
              text-decoration: none;
              font-size: 12px;
              font-weight: 800;
              letter-spacing: 1px;
              text-transform: uppercase;
              transition: transform .2s ease, opacity .2s ease;
            }

            .contact-button:hover {
              transform: translateY(-2px);
            }

            .button-whatsapp {
              background: ${theme.whatsapp};
              color: white;
            }

            .button-telegram {
              background: transparent;
              color: white;
              border: 1px solid rgba(255,255,255,.28);
            }

            .contact-details {
              margin-top: 24px;
              color: rgba(255,255,255,.42);
              font-size: 11px;
              letter-spacing: .5px;
            }

            /* --------------------------------
               FOOTER
            -------------------------------- */

            footer {
              background: #041421;
              color: rgba(255,255,255,.45);
              padding: 30px 20px;
              text-align: center;
            }

            .footer-brand {
              color: ${theme.goldLight};
              font-family: var(--font-display), serif;
              font-size: 20px;
              margin-bottom: 8px;
            }

            .footer-copy {
              margin: 0;
              font-size: 10px;
              line-height: 1.7;
            }

            /* --------------------------------
               MOBILE
            -------------------------------- */

            @media (max-width: 700px) {
              .hero {
                min-height: 640px;
              }

              .hero-inner {
                width: min(100% - 32px, 540px);
                min-height: 640px;
                padding-top: 20px;
                padding-bottom: 25px;
              }

              .nav-link {
                display: none;
              }

              .hero-overlay {
                background:
                  linear-gradient(
                    90deg,
                    rgba(5,20,34,.95) 0%,
                    rgba(5,20,34,.65) 55%,
                    rgba(5,20,34,.12) 100%
                  ),
                  linear-gradient(
                    0deg,
                    rgba(5,20,34,.96) 0%,
                    rgba(5,20,34,.12) 58%,
                    rgba(5,20,34,.28) 100%
                  );
              }

              .hero-title {
                font-size: clamp(57px, 17vw, 82px);
                letter-spacing: -2px;
              }

              .hero-title span {
                letter-spacing: -2px;
              }

              .hero-subtitle {
                max-width: 330px;
                font-size: 13px;
              }

              .hero-bottom {
                display: block;
              }

              .scroll-note {
                display: none;
              }

              .pillar-grid {
                display: block;
              }

              .pillar {
                min-height: auto;
                padding: 30px 0;
                border-right: 0;
                border-bottom: 1px solid ${theme.line};
              }

              .pillar:last-child {
                border-bottom: 0;
              }

              .pillar-number {
                margin-bottom: 26px;
              }

              .approach-inner {
                display: block;
              }

              .approach-copy-wrap {
                margin-top: 45px;
              }

              .contact-actions {
                flex-direction: column;
              }

              .contact-button {
                width: 100%;
              }
            }

            @media (prefers-reduced-motion: no-preference) {
              .reveal {
                animation: reveal .8s cubic-bezier(.22,1,.36,1) both;
              }

              .reveal-delay {
                animation: reveal .8s cubic-bezier(.22,1,.36,1) .12s both;
              }

              @keyframes reveal {
                from {
                  opacity: 0;
                  transform: translateY(18px);
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

        {/* ================================
            HERO
        ================================= */}

        <section className="hero">
          <div className="hero-image">
            <Image
              src="/banner.jpg"
              alt="Couple watching the sunset by the ocean"
              fill
              priority
              sizes="100vw"
            />
          </div>

          <div className="hero-overlay" />

          <div className="hero-inner">

            <div className="topbar">
              <Link href="/" className="brand">
                <div className="brand-mark">S</div>
                <span className="brand-name">
                  Smart Money
                </span>
              </Link>

              <a href="#contact" className="nav-link">
                Start a Conversation
              </a>
            </div>

            <div className="hero-content reveal">
              <div className="eyebrow">
                A Practical Guide to Wealth
              </div>

              <h1 className="hero-title">
                The Smart
                <span>Money Blueprint</span>
              </h1>

              <p className="hero-subtitle">
                A thoughtful approach to building financial
                confidence—through better decisions, consistent
                saving, purposeful investing, and a retirement
                plan built for the life you actually want.
              </p>
            </div>

            <div className="hero-bottom">
              <div className="hero-motto">
                Invest. <span>Save.</span> Retire.
              </div>

              <div className="scroll-note">
                <div className="scroll-line" />
                Explore the blueprint
              </div>
            </div>
          </div>
        </section>

        {/* ================================
            INTRO
        ================================= */}

        <section className="intro">
          <div className="intro-inner reveal">

            <div className="section-label">
              The philosophy
            </div>

            <h2>
              Wealth is built through
              <em> small decisions</em>
              made consistently.
            </h2>

            <p className="intro-copy">
              The Smart Money Blueprint is designed to make
              financial planning feel less complicated and more
              intentional. Instead of chasing quick wins, we focus
              on the fundamentals that can stand the test of time:
              clarity, discipline, diversification, and patience.
            </p>

          </div>
        </section>

        {/* ================================
            THREE PILLARS
        ================================= */}

        <section className="pillars">
          <div className="pillars-inner">

            <div className="dark-label">
              The three pillars
            </div>

            <h2 className="pillars-heading">
              A smarter way to think about your money.
            </h2>

            <div className="pillar-grid">

              <article className="pillar">
                <PillarIcon number="01" />

                <h3>Invest</h3>

                <p>
                  Put your money to work with a long-term
                  perspective. Understand risk, diversification,
                  and the role each investment plays in your
                  bigger financial picture.
                </p>
              </article>

              <article className="pillar">
                <PillarIcon number="02" />

                <h3>Save</h3>

                <p>
                  Build financial breathing room before you need
                  it. Strong saving habits create flexibility,
                  resilience, and the freedom to make better
                  decisions when life changes.
                </p>
              </article>

              <article className="pillar">
                <PillarIcon number="03" />

                <h3>Retire</h3>

                <p>
                  Turn today's decisions into tomorrow's options.
                  A thoughtful retirement strategy connects your
                  income, investments, goals, and the lifestyle
                  you hope to enjoy later.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* ================================
            APPROACH
        ================================= */}

        <section className="approach">
          <div className="approach-inner">

            <div>
              <div className="section-label">
                Our approach
              </div>

              <h2 className="approach-title">
                Less noise.
                <br />
                More <em>clarity.</em>
              </h2>
            </div>

            <div className="approach-copy-wrap">

              <p className="approach-copy">
                Financial planning should help you feel more
                confident—not more overwhelmed. The blueprint
                keeps the process grounded in a handful of
                principles that can guide decisions through
                different seasons of life.
              </p>

              <div className="principle">
                <CheckIcon />
                <strong>
                  Know where you are before deciding where to go.
                </strong>
              </div>

              <div className="principle">
                <CheckIcon />
                <strong>
                  Build habits that can survive changing markets.
                </strong>
              </div>

              <div className="principle">
                <CheckIcon />
                <strong>
                  Diversify thoughtfully rather than chasing trends.
                </strong>
              </div>

              <div className="principle">
                <CheckIcon />
                <strong>
                  Give long-term decisions enough time to compound.
                </strong>
              </div>

            </div>
          </div>
        </section>

        {/* ================================
            CONTACT
        ================================= */}

        <section className="contact" id="contact">
          <div className="contact-inner reveal">

            <div className="dark-label">
              Begin the conversation
            </div>

            <h2>
              Your financial future deserves a
              <em> blueprint.</em>
            </h2>

            <p className="contact-copy">
              Have questions about investing, saving, or
              preparing for retirement? Connect with us and
              take the first step toward a more intentional
              financial plan.
            </p>

            <div className="contact-actions">

              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button button-whatsapp"
              >
                WhatsApp
                <ArrowIcon />
              </Link>

              <Link
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button button-telegram"
              >
                Telegram
                <ArrowIcon />
              </Link>

            </div>

            <div className="contact-details">
              {whatsappNumber}
              {" · "}
              {telegramUsername}
            </div>

          </div>
        </section>

        {/* ================================
            FOOTER
        ================================= */}

        <footer>
          <div className="footer-brand">
            The Smart Money Blueprint
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} The Smart Money Blueprint.
            <br />
            Educational information only. Investment decisions
            should be based on your individual circumstances,
            objectives, and risk tolerance.
          </p>
        </footer>

      </div>
    </main>
  );
}
