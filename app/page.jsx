import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const WHATSAPP_URL = "https://wa.link/26glqx";
  const TELEGRAM_URL = "https://t.me/RW_Trade_Guides";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f2eb", // Warm cream backdrop synced with layout
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
          background: "#ffffff",
          borderRadius: "28px",
          overflow: "hidden",
          border: "1px solid #e5dfd3",
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

          {/* Dark Overlay for typography protection */}
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
                background: "#D4AF37",
                color: "#111827",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: ".05em",
                marginBottom: 12,
              }}
            >
              OFFICIAL CHANNELS
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
              border: "5px solid #ffffff",
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
              color: "#0f766e",
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

          {/* Action Buttons Funnel */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginBottom: 10,
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
                boxShadow: "0 8px 20px rgba(22, 163, 74, 0.15)",
              }}
            >
              💬 Chat on WhatsApp →
            </Link>

            {/* Secondary Light Teal Ghost Button */}
            <Link
              href={TELEGRAM_URL}
              target="_blank"
              style={{
                background: "transparent",
                color: "#0d9488",
                padding: "15px",
                borderRadius: 16,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                border: "2px solid #0d9488",
              }}
            >
              ✈️ Join our Telegram Channel →
            </Link>
          </div>

          {/* Minimal Clean Footer */}
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
            <p style={{ margin: "6px 0 12px 0" }}>
              We are committed to providing quality educational  and
              supporting investors on the journey toward financial growth.
            </p>
            <p
              style={{
                color: "#94a3b8",
                fontSize: 11,
                letterSpacing: "0.02em",
                margin: 0,
              }}
            >
              🔒 Secure Communication • 🌍 Global Community • 📚 Educational Resources
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
