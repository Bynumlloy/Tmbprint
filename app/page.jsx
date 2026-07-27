import Image from "next/image";
import Link from "next/link";
import { neon } from "@neondatabase/serverless";

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

export default async function Home() {
  const { whatsapp: WHATSAPP_URL, telegram: TELEGRAM_URL } = await getLinks();

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#16252f",
        display: "flex",
        justifyContent: "center",
        fontFamily:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html,body{
              margin:0;
              padding:0;
              background:#16252f;
              overflow-x:hidden;
            }
          `,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 460,
          minHeight: "100vh",
          background: "#16252f",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          {/* Banner */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 220,
            }}
          >
            <Image
              src="/banner.jpg"
              alt="Acme MTC Guild Banner"
              fill
              priority
              style={{ objectFit: "cover" }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(22,37,47,0) 55%, rgba(22,37,47,.35) 80%, #16252f 100%)",
              }}
            />
          </div>

          {/* Content */}
          <div
            style={{
              padding: "0 24px 40px",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                color: "#fff",
                fontSize: 38,
                lineHeight: 1.2,
                marginBottom: 16,
                textAlign: "center",
                fontWeight: "normal",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    display: "block",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  Acme
                </span>
                <span
                  style={{
                    color: "#cfa043",
                    fontWeight: 900,
                    display: "block",
                    paddingLeft: "24px",
                  }}
                >
                  MTC
                </span>
                <span
                  style={{
                    color: "#cfa043",
                    fontWeight: 900,
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  Guild
                </span>
              </div>
            </h1>

            <p
              style={{
                color: "#b7c6d1",
                fontSize: 17,
                lineHeight: 1.7,
                marginBottom: 36,
              }}
            >
              Welcome to Acme MTC Guild. We are a global group based in the
              United States, made up of members from diverse cultures and
              countries. We specialize in personalized retirement planning and
              strategic investment guidance, with a mission to deliver clear,
              client-focused solutions for lasting success.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginBottom: 8,
              }}
            >
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                style={{
                  background: "#16a34a",
                  color: "#ffffff",
                  padding: "16px",
                  borderRadius: 16,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 16,
                  border: "2px solid #16a34a",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.516 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.66.986 3.288 1.474 4.825 1.475 5.4 0 9.795-4.39 9.798-9.789.002-2.618-1.017-5.08-2.87-6.934C16.49 2.052 14.04 1.029 11.5 1.029c-5.402 0-9.8 4.393-9.803 9.792-.001 1.629.433 3.219 1.258 4.631l-.995 3.635 3.731-.977zm12.181-5.395c-.303-.151-1.793-.884-2.071-.985-.279-.101-.482-.151-.684.151-.202.303-.783.985-.96 1.187-.177.202-.354.227-.657.076-1.396-.698-2.3-1.226-3.21-2.78-.24-.411.24-.382.687-1.275.076-.151.038-.284-.019-.39-.057-.101-.482-1.161-.66-1.589-.173-.417-.348-.36-.482-.367-.124-.006-.266-.007-.407-.007-.141 0-.37.053-.564.266-.194.213-.74.723-.74 1.761 0 1.038.754 2.039.859 2.181.106.142 1.484 2.266 3.597 3.177 1.472.635 2.12.723 2.879.614.475-.068 1.455-.595 1.658-1.167.202-.572.202-1.061.142-1.161-.06-.1-.22-.151-.523-.303z" />
                </svg>
                Chat on WhatsApp
              </Link>

              <Link
                href={TELEGRAM_URL}
                target="_blank"
                style={{
                  background: "#21BEDE",
                  color: "#fff",
                  padding: "15px",
                  borderRadius: 16,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 16,
                  border: "2px solid #21BEDE",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.03-.75 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.19z" />
                </svg>
                Chat on Telegram
              </Link>
            </div>

            <section style={{ marginBottom: 42 }}>
              <h2
                style={{
                  color: "#fff",
                  fontSize: 24,
                  marginTop: 40,
                  marginBottom: 24,
                }}
              >
                Our MTC Framework
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    color: "#9fb0bc",
                    lineHeight: 1.8,
                    fontSize: 15,
                    margin: 0,
                  }}
                >
                  Our team brings deep experience in retirement planning,
                  investment strategies, and estate preparation all grounded
                  in our proven MTC framework:
                </p>

                <ul
                  style={{
                    color: "#9fb0bc",
                    lineHeight: 1.8,
                    fontSize: 15,
                    margin: 0,
                    paddingLeft: "20px",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    <strong>Mindset</strong> – Building the right habits:
                    patience, discipline, and long-term focus
                  </li>
                  <li>
                    <strong>Time</strong> – Leveraging consistency and the
                    power of compounding
                  </li>
                  <li>
                    <strong>Capital</strong> – Putting your resources to work
                    through diversified strategies and smart decision making
                  </li>
                </ul>

                <p
                  style={{
                    color: "#9fb0bc",
                    lineHeight: 1.8,
                    fontSize: 15,
                    margin: 0,
                  }}
                >
                  Whether you're nearing retirement, exploring opportunities,
                  or following proven signals, Acme MTC Guild keeps you
                  aligned with what truly matter.
                </p>
              </div>
            </section>
          </div>
        </div>

        <footer
          style={{
            background: "#0f171e",
            borderTop: "1px solid rgba(255,255,255,.05)",
            padding: "24px 20px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#526675",
              fontSize: 12,
              margin: "0 0 4px 0",
            }}
          >
            📞 +1 (929) 607‑2719
          </p>
          <p
            style={{
              color: "#526675",
              fontSize: 12,
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Acme MTC Guild. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
