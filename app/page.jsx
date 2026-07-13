import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const WHATSAPP_URL = "https://wa.link/26glqx";
  const TELEGRAM_URL = "https://t.me/RW_Trade_Guides";

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
              alt="Banner"
              fill
              priority
              style={{ objectFit: "cover" }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(22,37,47,0), rgba(22,37,47,.20), #16252f)",
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
            <div
              style={{
                marginTop: -55,
                marginBottom: 24,
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Richard Wealth"
                width={110}
                height={110}
                style={{
                  borderRadius: "50%",
                  border: "4px solid #16252f",
                  objectFit: "cover",
                }}
              />
            </div>

            <h1
              style={{
                color: "#fff",
                fontSize: 34,
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Let's build
              <br />
              <span
                style={{
                  color: "#cfa043",
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                your wealth.
              </span>
            </h1>

            <p
              style={{
                color: "#b7c6d1",
                fontSize: 17,
                lineHeight: 1.7,
                marginBottom: 36,
              }}
            >
              Helping investors build wealth, trade confidently,
              eliminate debt and retire with lasting financial freedom.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginBottom: 48,
              }}
            >
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                style={{
                  background: "#25D366",
                  color: "#fff",
                  padding: "16px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Chat on WhatsApp
              </Link>

              <Link
                href={TELEGRAM_URL}
                target="_blank"
                style={{
                  background: "#229ED9",
                  color: "#fff",
                  padding: "16px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Join us on Telegram
              </Link>
            </div>

            <section style={{ marginBottom: 42 }}>
              <h2
                style={{
                  color: "#fff",
                  fontSize: 22,
                  marginBottom: 14,
                }}
              >
                About RWG
              </h2>

              <p
                style={{
                  color: "#9fb0bc",
                  lineHeight: 1.8,
                  fontSize: 15,
                }}
              >
                Retire Wealthy Guides is a global community where
                people share retirement ideas, learn practical financial
                strategies, and inspire one another to build a secure
                financial future.
              </p>
            </section>

            <section style={{ marginBottom: 42 }}>
              <h2
                style={{
                  color: "#fff",
                  fontSize: 22,
                  marginBottom: 18,
                }}
              >
                Our Global Community
              </h2>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginBottom: 18,
                  fontWeight: 700,
                  color: "#cfa043",
                }}
              >
                <span>🇺🇸 USA</span>
                <span>🇦🇺 Australia</span>
                <span>🇬🇧 UK</span>
              </div>

              <p
                style={{
                  color: "#9fb0bc",
                  lineHeight: 1.8,
                  fontSize: 15,
                }}
              >
                Our members come from different cultures and backgrounds,
                creating an encouraging environment where everyone can
                learn, grow and succeed together.
              </p>
            </section>

            <section>
              <h2
                style={{
                  color: "#fff",
                  fontSize: 22,
                  marginBottom: 20,
                }}
              >
                What You'll Gain
              </h2>

              <div
                style={{
                  display: "grid",
                  gap: 14,
                }}
              >
                                {[
                  {
                    title: "📈 Smarter Investing",
                    text: "Learn practical investment strategies designed to help you grow wealth with confidence.",
                  },
                  {
                    title: "📊 Confident Trading",
                    text: "Gain market insights and step-by-step guidance to make informed trading decisions.",
                  },
                  {
                    title: "💰 Debt Elimination",
                    text: "Discover proven approaches to reduce debt and strengthen your financial foundation.",
                  },
                  {
                    title: "🏖️ Retirement Planning",
                    text: "Build sustainable income streams and prepare for long-term financial independence.",
                  },
                  {
                    title: "🤝 Expert Guidance",
                    text: "Benefit from shared knowledge, educational resources, and support from our global community.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      background: "#1b2d38",
                      border: "1px solid rgba(255,255,255,.05)",
                      borderRadius: 14,
                      padding: 18,
                      textAlign: "left",
                    }}
                  >
                    <h3
                      style={{
                        color: "#fff",
                        fontSize: 17,
                        margin: "0 0 10px",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        color: "#8ea3b1",
                        fontSize: 14,
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <p
              style={{
                color: "#748a99",
                fontSize: 14,
                marginTop: 36,
                marginBottom: 0,
              }}
            >
              We typically respond within a few hours.
            </p>
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
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Retire Wealthy Guides. All rights
            reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
