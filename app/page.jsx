import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const WHATSAPP_URL = "https://wa.link/26glqx";
  const TELEGRAM_URL = "https://t.me/RW_Trade_Guides";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f2eb",
        display: "flex",
        justifyContent: "center",
        padding: "15px 12px",
        fontFamily:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          background: "#ffffff",
          borderRadius: "24px",
          overflow: "hidden",
          border: "1px solid #e5dfd3",
          boxShadow: "0 15px 35px rgba(45, 42, 38, 0.05)",
        }}
      >
        {/* Banner - Cleaned up completely to eliminate text collisions */}
        <div
          style={{
            position: "relative",
            height: "150px", // Reduced height since text moved below
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
              background: "linear-gradient(to top, rgba(0,0,0,0.2), transparent)",
            }}
          />
        </div>

        {/* Profile Image Wrapper */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-50px", // Nicely sits halfway up the banner image
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #ffffff",
              background: "#ffffff",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06)",
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
            padding: "12px 20px 20px 20px", // Optimized snug padding
            textAlign: "center",
          }}
        >
          {/* Official Community Badge - Safely placed below avatar */}
          <div
            style={{
              display: "inline-block",
              padding: "4px 10px",
              background: "#D4AF37",
              color: "#111827",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: ".05em",
              marginBottom: 10,
            }}
          >
            OFFICIAL COMMUNITY
          </div>

          {/* Title - Moved here for flawless legibility & crisp layout hierarchy */}
          <h1
            style={{
              margin: "0 0 6px 0",
              fontSize: 26,
              fontWeight: 800,
              color: "#0f172a", // Deep slate for premium readability
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            The Retire Wealthy Guides
          </h1>

          <p
            style={{
              color: "#0f766e",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: ".1em",
              fontSize: 11,
              marginBottom: 12,
            }}
          >
            Plan Today for a Comfortable Tomorrow
          </p>

          <p
            style={{
              color: "#475569",
              lineHeight: 1.6,
              fontSize: 14.5,
              margin: "0 0 22px 0",
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
              gap: 10,
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
                padding: "14px",
                borderRadius: 14,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 15.5,
                boxShadow: "0 6px 15px rgba(22, 163, 74, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.516 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.66.986 3.288 1.474 4.825 1.475 5.4 0 9.795-4.39 9.798-9.789.002-2.618-1.017-5.08-2.87-6.934C16.49 2.052 14.04 1.029 11.5 1.029c-5.402 0-9.8 4.393-9.803 9.792-.001 1.629.433 3.219 1.258 4.631l-.995 3.635 3.731-.977zm12.181-5.395c-.303-.151-1.793-.884-2.071-.985-.279-.101-.482-.151-.684.151-.202.303-.783.985-.96 1.187-.177.202-.354.227-.657.076-1.396-.698-2.3-1.226-3.21-2.78-.24-.411.24-.382.687-1.275.076-.151.038-.284-.019-.39-.057-.101-.482-1.161-.66-1.589-.173-.417-.348-.36-.482-.367-.124-.006-.266-.007-.407-.007-.141 0-.37.053-.564.266-.194.213-.74.723-.74 1.761 0 1.038.754 2.039.859 2.181.106.142 1.484 2.266 3.597 3.177 1.472.635 2.12.723 2.879.614.475-.068 1.455-.595 1.658-1.167.202-.572.202-1.061.142-1.161-.06-.1-.22-.151-.523-.303z"/>
              </svg>
              Chat on WhatsApp
            </Link>

            {/* Secondary Light Teal Ghost Button */}
            <Link
              href={TELEGRAM_URL}
              target="_blank"
              style={{
                background: "transparent",
                color: "#0d9488",
                padding: "13px",
                borderRadius: 14,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 15.5,
                border: "2px solid #0d9488",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.03-.75 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.19z"/>
              </svg>
              Join our Telegram Channel
            </Link>
          </div>

          {/* Minimal Clean Footer */}
          <div
            style={{
              marginTop: 24,
              borderTop: "1px solid #ebe5d8",
              paddingTop: 16,
              color: "#64748b",
              fontSize: 12.5,
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "#0f172a", fontSize: 13.5 }}>
              Official Communication Channels
            </strong>
            <p style={{ margin: "4px 0 10px 0" }}>
              We are committed to providing quality educational content and
              supporting our community on the journey toward financial growth.
            </p>
            <p
              style={{
                color: "#94a3b8",
                fontSize: 11,
                letterSpacing: "0.01em",
                margin: 0,
              }}
            >
              🔒 Secure Communication • 🌍 Global Community
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
