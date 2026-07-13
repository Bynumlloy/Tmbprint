import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const WHATSAPP_URL = "https://wa.link/26glqx";
  const TELEGRAM_URL = "https://t.me/RW_Trade_Guides";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #042f2e 0%, #0f172a 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px 12px",
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "#0b1315",
          borderRadius: "24px",
          overflow: "hidden",
          border: "1px solid #14532d",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Banner - Kept as requested */}
        <div style={{ position: "relative", height: "220px" }}>
          <Image src="/banner.jpg" alt="Banner" fill priority style={{ objectFit: "cover" }} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(11,19,21,0.2), #0b1315)",
            }}
          />
          <div style={{ position: "absolute", left: 20, top: 20 }}>
            <div
              style={{
                display: "inline-block",
                padding: "6px 14px",
                background: "#D4AF37",
                color: "#111827",
                borderRadius: 999,
                fontWeight: 800,
                fontSize: 10,
                letterSpacing: ".08em",
              }}
            >
              OFFICIAL COMMUNITY
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div style={{ padding: "0 24px 32px 24px", marginTop: "-10px" }}>
          
          {/* Main Header */}
          <h1
            style={{
              color: "#ffffff",
              fontWeight: 800,
              fontSize: 24,
              letterSpacing: "-0.02em",
              marginBottom: 8,
              textAlign: "left",
            }}
          >
            The Retire Wealthy Guides <span style={{ color: "#D4AF37" }}>(RWG)</span>
          </h1>

          <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.5, marginBottom: 24, textAlign: "left" }}>
            A global community where people share retirement ideas, learn from one another, and find inspiration for the next chapter of life.
          </p>

          {/* Breakdown Section 1: Global Footprint */}
          <div 
            style={{ 
              background: "rgba(20, 83, 45, 0.2)", 
              border: "1px solid rgba(20, 83, 45, 0.4)", 
              borderRadius: "16px", 
              padding: "16px", 
              marginBottom: 20,
              textAlign: "left" 
            }}
          >
            <p style={{ color: "#2dd4bf", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 8px 0" }}>
              Worldwide Support Hubs
            </p>
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
              {["United States", "Australia", "United Kingdom"].map((country) => (
                <span key={country} style={{ background: "#111827", color: "#f8fafc", padding: "4px 10px", borderRadius: "6px", fontSize: 11, fontWeight: 600 }}>
                  🇺🇸🇬🇧 {country === "United States" ? "USA" : country === "Australia" ? "AUS" : "UK"}
                </span>
              ))}
            </div>
            <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.5, margin: 0 }}>
              Bringing together members across the globe in a diverse environment to connect, learn, and inspire one another.
            </p>
          </div>

          {/* Breakdown Section 2: Core Pillars */}
          <div style={{ textAlign: "left", marginBottom: 28 }}>
            <p style={{ color: "#D4AF37", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
              Expert Financial Framework
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { title: "Invest & Trade Smarter", desc: "Gain confidence with master insights from top financial experts." },
                { title: "Eliminate Debt", desc: "Strategically optimize and strengthen your retirement finances." },
                { title: "Grow Residual Income", desc: "Access shared tools, free education, and step-by-step guidance." }
              ].map((item, index) => (
                <div key={index} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ color: "#2dd4bf", fontSize: 16, marginTop: 2 }}>✔</div>
                  <div>
                    <strong style={{ color: "#f8fafc", fontSize: 14, display: "block" }}>{item.title}</strong>
                    <span style={{ color: "#64748b", fontSize: 13, lineHeight: 1.4 }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Phrase */}
          <div style={{ borderTop: "1px solid #1e293b", paddingTop: 20, marginBottom: 16 }}>
            <p style={{ color: "#ffffff", fontWeight: 700, fontSize: 15, margin: 0 }}>
              🚀 Ready for long-term financial freedom?
            </p>
            <p style={{ color: "#94a3b8", fontSize: 13, margin: "4px 0 0 0" }}>
              Join us on WhatsApp or Telegram
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              style={{
                background: "#16a34a",
                color: "#ffffff",
                padding: "16px",
                borderRadius: 14,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                transition: "background 0.2s",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.516 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.66.986 3.288 1.474 4.825 1.475 5.4 0 9.795-4.39 9.798-9.789.002-2.618-1.017-5.08-2.87-6.934C16.49 2.052 14.04 1.029 11.5 1.029c-5.402 0-9.8 4.393-9.803 9.792-.001 1.629.433 3.219 1.258 4.631l-.995 3.635 3.731-.977zm12.181-5.395c-.303-.151-1.793-.884-2.071-.985-.279-.101-.482-.151-.684.151-.202.303-.783.985-.96 1.187-.177.202-.354.227-.657.076-1.396-.698-2.3-1.226-3.21-2.78-.24-.411.24-.382.687-1.275.076-.151.038-.284-.019-.39-.057-.101-.482-1.161-.66-1.589-.173-.417-.348-.36-.482-.367-.124-.006-.266-.007-.407-.007-.141 0-.37.053-.564.266-.194.213-.74.723-.74 1.761 0 1.038.754 2.039.859 2.181.106.142 1.484 2.266 3.597 3.177 1.472.635 2.12.723 2.879.614.475-.068 1.455-.595 1.658-1.167.202-.572.202-1.061.142-1.161-.06-.1-.22-.151-.523-.303z"/>
              </svg>
              Connect on WhatsApp
            </Link>

            <Link
              href={TELEGRAM_URL}
              target="_blank"
              style={{
                background: "#21BEDE",
                color: "#ffffff",
                padding: "16px",
                borderRadius: 14,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                transition: "background 0.2s",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.03-.75 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.19z"/>
              </svg>
              Connect on Telegram
            </Link>
          </div>

          {/* Secure Footer Badges */}
          <div style={{ marginTop: 24, textAlign: "center" }}>
            <p style={{ color: "#475569", fontSize: 11, letterSpacing: "0.04em", margin: 0 }}>
              🔒 SECURE NETWORKING • 🌍 MULTI-CULTURAL • 📚 FREE EDUCATION
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
