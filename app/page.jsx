import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const WHATSAPP_URL = "https://wa.link/26glqx";
  const TELEGRAM_URL = "https://t.me/RW_Trade_Guides";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        display: "flex",
        justifyContent: "center",
        padding: "30px 15px",
        fontFamily:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "#fff",
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,.08)",
        }}
      >
        {/* Hero */}
        <div
          style={{
            position: "relative",
            height: "280px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/banner.jpg"
            alt="Banner"
            fill
            priority
            style={{
              objectFit: "cover",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(15,23,42,.95), rgba(15,23,42,.2))",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: 30,
              left: 24,
              right: 24,
              color: "white",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "#D4AF37",
                color: "#111",
                padding: "6px 14px",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 12,
                marginBottom: 14,
              }}
            >
              OFFICIAL COMMUNITY
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 34,
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              The Retired Wealthy Guides
            </h1>

            <p
              style={{
                marginTop: 10,
                color: "#d1d5db",
                lineHeight: 1.5,
              }}
            >
              Helping investors build lasting wealth through education,
              discipline and smart opportunities.
            </p>
          </div>

          {/* Profile */}
          <div
            style={{
              position: "absolute",
              bottom: -45,
              right: 25,
              width: 90,
              height: 90,
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid white",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "70px 24px 35px" }}>
          {/* Trust */}
          <div
            style={{
              background: "#f8fafc",
              borderRadius: 18,
              padding: 18,
              marginBottom: 28,
              textAlign: "center",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                color: "#f59e0b",
                fontSize: 22,
              }}
            >
              ★★★★★
            </div>

            <p
              style={{
                marginTop: 10,
                color: "#475569",
                lineHeight: 1.6,
              }}
            >
              Join a growing community focused on financial education,
              disciplined investing and long-term wealth creation.
            </p>
          </div>

          {/* Features */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 14,
              marginBottom: 30,
            }}
          >
            {[
              {
                icon: "📈",
                title: "Daily Market Insights",
                text: "Stay informed with market updates and educational content.",
              },
              {
                icon: "💎",
                title: "VIP Community",
                text: "Connect with experienced traders and investors.",
              },
              {
                icon: "🎯",
                title: "Trading & Wealth Guides",
                text: "Practical strategies designed for long-term growth.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: 15,
                  padding: 18,
                  border: "1px solid #e5e7eb",
                  borderRadius: 18,
                }}
              >
                <div style={{ fontSize: 28 }}>{item.icon}</div>

                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      marginBottom: 6,
                      color: "#0f172a",
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      color: "#64748b",
                      lineHeight: 1.5,
                      fontSize: 14,
                    }}
                  >
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}

          <Link
            href={WHATSAPP_URL}
            target="_blank"
            style={{
              display: "block",
              textDecoration: "none",
              textAlign: "center",
              background: "#16a34a",
              color: "#fff",
              padding: "18px",
              borderRadius: 18,
              fontWeight: 700,
              fontSize: 17,
              marginBottom: 14,
            }}
          >
            💬 Chat with us on WhatsApp →
          </Link>

          <Link
            href={TELEGRAM_URL}
            target="_blank"
            style={{
              display: "block",
              textDecoration: "none",
              textAlign: "center",
              background: "#0284c7",
              color: "#fff",
              padding: "18px",
              borderRadius: 18,
              fontWeight: 700,
              fontSize: 17,
            }}
          >
            ✈️ Join us on Telegram →
          </Link>

          {/* Footer */}

          <div
            style={{
              marginTop: 35,
              textAlign: "center",
              color: "#64748b",
              fontSize: 13,
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "#0f172a" }}>
              Plan Today for a Comfortable Tomorrow
            </strong>

            <p style={{ marginTop: 12 }}>
              We provide educational content and community support to help you
              make informed financial decisions.
            </p>

            <p
              style={{
                fontSize: 12,
                color: "#94a3b8",
              }}
            >
              🔒 Official Channels • Secure Communication • Professional Support
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
