import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const WHATSAPP_URL = "https://wa.link/26glqx";
  const TELEGRAM_URL = "https://t.me/RW_Trade_Guides";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f2eb", // Soft, warm light cream backdrop
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
          background: "#ffffff", // Crisp white card container for clean separation
          borderRadius: "28px",
          overflow: "hidden",
          border: "1px solid #e5dfd3", // Subtle warm border definition
          boxShadow: "0 20px 40px rgba(45, 42, 38, 0.06)",
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

          {/* Dark Overlay to protect white text legibility over the sunny beach image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(15, 28, 36, 0.85) 15%, rgba(15, 28, 36, 0.2) 100%)",
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
                background: "#D4AF37", // Elegant gold tag
                color: "#111827",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: ".05em",
                marginBottom: 12,
              }}
            >
              OFFICIAL COMMUNITY
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 32,
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              The Retire Wealthy Guides
            </h1>
          </div>
        </div>

        {/* Profile Image Wrapper */}
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
              border: "5px solid #ffffff", // Pops beautifully against the body
              background: "#ffffff",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
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

        {/* Body Content */}
        <div
          style={{
            padding: "24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#0f766e", // Premium Deep Teal for subheadings
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: ".1em",
              fontSize: 12,
              marginBottom: 12,
            }}
          >
            Plan Today for a Comfortable Tomorrow
          </p>

          <p
            style={{
              color: "#475569", // Highly legible slate gray for regular prose
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

          {/* Action Buttons Funnel */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginBottom: 30,
            }}
          >
            {/* Primary Action Button */}
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              style={{
                background: "#16a34a", // Retaining WhatsApp's recognizable identity color
                color: "#ffffff",
                padding: "16px",
                borderRadius: 16,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                boxShadow: "0 8px 20px rgba(22, 163, 74, 0.15)",
              }}
            >
              💬 Chat on WhatsApp →
            </Link>

            {/* Secondary Light Teal Ghost Button to prevent choice-friction */}
            <Link
              href={TELEGRAM_URL}
              target="_blank"
              style={{
                background: "transparent",
                color: "#0d9488", // Clean Light Teal action text
                padding: "15px",
                borderRadius: 16,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                border: "2px solid #0d9488", // Light Teal outline
              }}
            >
              ✈️ Join our Telegram Channel →
            </Link>
          </div>

          {/* Social Proof / Trust Card */}
          <div
            style={{
              background: "#faf8f5", // Cream accent panel tint
              border: "1px solid #eaddca",
              borderRadius: 18,
              padding: 20,
              marginBottom: 26,
            }}
          >
            <div
              style={{
                fontSize: 20,
                color: "#d97706", // Soft warm amber stars
                letterSpacing: "2px",
              }}
            >
              ★★★★★
            </div>

            <p
              style={{
                marginTop: 10,
                marginBottom: 0,
                color: "#334155",
                lineHeight: 1.6,
                fontSize: 14,
              }}
            >
              Join a growing community dedicated to financial education,
              disciplined investing, and long-term wealth creation.
            </p>
          </div>

          {/* Value Props / Features Grid */}
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
                  background: "#faf8f5", // Matching light cream accent panel
                  border: "1px solid #ebe5d8",
                  textAlign: "left",
                }}
              >
                <div style={{ fontSize: 26, lineHeight: 1 }}>{item.icon}</div>

                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#0f172a",
                      fontSize: 15,
                      marginBottom: 4,
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      color: "#475569",
                      fontSize: 13,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Minimalist Footer */}
          <div
            style={{
              marginTop: 35,
              borderTop: "1px solid #ebe5d8",
              paddingTop: 24,
              color: "#64748b",
              fontSize: 13,
              lineHeight: 1.8,
            }}
          >
            <strong style={{ color: "#0f172a", fontSize: 14 }}>
              Official Communication Channels
            </strong>

            <p style={{ margin: "8px 0 16px 0" }}>
              We are committed to providing quality educational content and
              supporting our community on the journey toward financial growth.
            </p>

            <p
              style={{
                color: "#94a3b8",
                fontSize: 11,
                letterSpacing: "0.02em",
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
