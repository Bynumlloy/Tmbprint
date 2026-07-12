import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const WHATSAPP_URL = "https://wa.link/26glqx";
  const TELEGRAM_URL = "https://t.me/RW_Trade_Guides";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a", // Deep, anti-glare backdrop
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
          background: "#000000", // Pure black container for deep contrast
          borderRadius: "28px",
          overflow: "hidden",
          border: "1px solid #1e1e1e", // Subtle edge definition
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
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

          {/* Enhanced High-Contrast Dark Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.95) 15%, rgba(0,0,0,0.2) 100%)",
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
                color: "#000000",
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
              border: "5px solid #000000", // Merges seamlessly with the pure black body
              background: "#000000",
              boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
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
              color: "#34d399", // High-visibility mint green for dark UI
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
              color: "#a1a1aa", // Soft zinc gray to prevent optical fatigue
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

          {/* Streamlined Action Funnel */}
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
                background: "#16a34a",
                color: "#ffffff",
                padding: "16px",
                borderRadius: 16,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                boxShadow: "0 8px 20px rgba(22,163,74,.15)",
                transition: "background 0.2s",
              }}
            >
              💬 Chat on WhatsApp →
            </Link>

            {/* Secondary Ghost Button to reduce choice-friction */}
            <Link
              href={TELEGRAM_URL}
              target="_blank"
              style={{
                background: "transparent",
                color: "#38bdf8",
                padding: "15px",
                borderRadius: 16,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                border: "2px solid #0284c7",
                transition: "all 0.2s",
              }}
            >
              ✈️ Join our Telegram Channel →
            </Link>
          </div>

          {/* Social Proof/Trust Card */}
          <div
            style={{
              background: "#09090b",
              border: "1px solid #1e1e1e",
              borderRadius: 18,
              padding: 20,
              marginBottom: 26,
            }}
          >
            <div
              style={{
                fontSize: 20,
                color: "#fbbf24",
                letterSpacing: "2px",
              }}
            >
              ★★★★★
            </div>

            <p
              style={{
                marginTop: 10,
                marginHeight: 0,
                color: "#e4e4e7",
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
                  background: "#09090b",
                  border: "1px solid #161617",
                  textAlign: "left",
                }}
              >
                <div style={{ fontSize: 26, lineHeight: 1 }}>{item.icon}</div>

                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#ffffff",
                      fontSize: 15,
                      marginBottom: 4,
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      color: "#a1a1aa",
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
              borderTop: "1px solid #161617",
              paddingTop: 24,
              color: "#71717a",
              fontSize: 13,
              lineHeight: 1.8,
            }}
          >
            <strong style={{ color: "#ffffff", fontSize: 14 }}>
              Official Communication Channels
            </strong>

            <p style={{ margin: "8px 0 16px 0" }}>
              We are committed to providing quality educational content and
              supporting our community on the journey toward financial growth.
            </p>

            <p
              style={{
                color: "#52525b",
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
