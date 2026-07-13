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
                  fontSize: 24,
                  marginTop: 40,
                  marginBottom: 24,
                }}
              >
                About Retire Wealthy Guides
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
                  The Retire Wealthy Guides (RWG) is a global community where people
                  share retirement ideas, learn from one another, and find inspiration
                  for the next chapter of life.
                </p>

                <p
                  style={{
                    color: "#9fb0bc",
                    lineHeight: 1.8,
                    fontSize: 15,
                    margin: 0,
                  }}
                >
                  Our worldwide community is supported from the <strong>United States</strong>,
                  <strong> Australia</strong>, and the <strong>United Kingdom</strong>,
                  bringing together members from across the globe in a diverse environment
                  where people from different cultures and backgrounds can connect, learn,
                  and inspire one another.
                </p>

                <p
                  style={{
                    color: "#9fb0bc",
                    lineHeight: 1.8,
                    fontSize: 15,
                    margin: 0,
                  }}
                >
                  The Retire Wealthy Guides also unites top financial experts to help you
                  <strong> invest smarter</strong>,
                  <strong> trade confidently</strong>,
                  <strong> eliminate debt</strong>,
                  <strong> build wealth</strong>, and strengthen your retirement finances.
                  With shared tools, free education, support, insights, and step-by-step
                  guidance, we're here to help you grow residual income and achieve your
                  long-term financial freedom and retirement goals.
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
