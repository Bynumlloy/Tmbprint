import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const WHATSAPP_URL = "https://wa.link/26glqx";
  const TELEGRAM_URL = "https://t.me/RW_Trade_Guides";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
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
        {/* Banner */}
        <div
          style={{
            position: "relative",
            height: "250px",
          }}
        >
          <Image
            src="/banner.jpg"
            alt="Banner"
            fill
            priority
            style={{ objectFit: "cover" }}
          />

          {/* Dark Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(15,23,42,.85), rgba(15,23,42,.15))",
            }}
          />

          {/* Banner Text */}
          <div
            style={{
              position: "absolute",
              left: 24,
              right: 24,
              bottom: 24,
              color: "#fff",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "6px 14px",
                background: "#D4AF37",
                color: "#111827",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 12,
                marginBottom: 12,
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
          </div>
        </div>

        {/* Profile Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-60px",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              overflow: "hidden",
              border: "5px solid white",
              background: "#fff",
              boxShadow: "0 15px 35px rgba(0,0,0,.18)",
              position: "relative",
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

        {/* Body */}
        <div
          style={{
            padding: "24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#059669",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: ".08em",
              fontSize: 13,
              marginBottom: 10,
            }}
          >
            Plan Today for a Comfortable Tomorrow
          </p>

          <p
            style={{
              color: "#475569",
              lineHeight: 1.7,
              fontSize: 15,
              marginBottom: 28,
            }}
          >
            Helping investors build lasting wealth through education,
            discipline, and smart opportunities. Connect with us directly to
            access our exclusive community, market insights, and wealth-building
            resources.
          </p>

          {/* Contact Buttons FIRST */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginBottom: 30,
            }}
          >
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              style={{
                background: "#16a34a",
                color: "#fff",
                padding: "18px",
                borderRadius: 18,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 17,
                boxShadow: "0 10px 20px rgba(22,163,74,.2)",
              }}
            >
              💬 Chat on WhatsApp →
            </Link>

            <Link
              href={TELEGRAM_URL}
              target="_blank"
              style={{
                background: "#0284c7",
                color: "#fff",
                padding: "18px",
                borderRadius: 18,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 17,
                boxShadow: "0 10px 20px rgba(2,132,199,.2)",
              }}
            >
              ✈️ Join our Telegram Channel →
            </Link>
          </div>

          {/* Trust Card */}
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: 18,
              padding: 20,
              marginBottom: 26,
            }}
          >
            <div
              style={{
                fontSize: 22,
                color: "#f59e0b",
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
              Join a growing community dedicated to financial education,
              disciplined investing, and long-term wealth creation.
            </p>
          </div>

          {/* Features */}
          <div
            style={{
              display: "grid",
              gap: 14,
            }}
          >
            {[
              {
                icon: "📈",
                title: "Daily Market Insights",
                text: "Receive timely educational market updates and trading ideas.",
              },
              {
                icon: "💎",
                title: "Exclusive VIP Community",
                text: "Network with serious investors and gain access to premium content.",
              },
              {
                icon: "🎯",
                title: "Wealth Building Strategies",
                text: "Learn practical methods designed to help you grow your financial knowledge.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: 15,
                  alignItems: "flex-start",
                  padding: 18,
                  borderRadius: 18,
                  border: "1px solid #e5e7eb",
                  textAlign: "left",
                }}
              >
                <div style={{ fontSize: 28 }}>{item.icon}</div>

                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      color: "#64748b",
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div
            style={{
              marginTop: 35,
              borderTop: "1px solid #e5e7eb",
              paddingTop: 20,
              color: "#64748b",
              fontSize: 13,
              lineHeight: 1.8,
            }}
          >
            <strong style={{ color: "#0f172a" }}>
              Official Communication Channels
            </strong>

            <p>
              We are committed to providing quality educational content and
              supporting our community on the journey toward financial growth.
            </p>

            <p
              style={{
                color: "#94a3b8",
                fontSize: 12,
              }}
            >
              🔒 Secure Communication • 🌍 Global Community • 📚 Educational
              Resources
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
