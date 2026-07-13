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
        background: "#16252f", /* Matched to core background to prevent color flashing */
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0",
        margin: "0",
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
      }}
    >
      {/* Global CSS Inject to obliterate default browser margins/padding and white spaces */}
      <style dangerouslySetInnerHTML={{__html: `
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          background-color: #16252f !important;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
        }
      `}} />

      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          minHeight: "100vh",
          background: "#16252f",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "0 auto",
        }}
      >
        <div>
          {/* Top Brand & Action Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "18px 24px",
              background: "rgba(15, 23, 30, 0.6)",
              backdropFilter: "blur(8px)",
            }}
          >
         

          {/* Hero Banner Area */}
          <div style={{ position: "relative", height: "200px", width: "100%" }}>
            <Image src="/banner.jpg" alt="Banner" fill priority style={{ objectFit: "cover" }} />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(22, 37, 47, 0.1), #16252f)",
              }}
            />
          </div>

          {/* Core Content Box */}
          <div style={{ padding: "0 24px 40px 24px", textAlign: "center" }}>
            
            {/* Elegant Serif Header Group */}
            <h1
              style={{
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 34,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                margin: "0 0 24px 0",
              }}
            >
              Let's build <br />
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

            {/* Structured Descriptive Text */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 36 }}>
              <p style={{ color: "#9aaebc", fontSize: 15, lineHeight: 1.6, margin: 0, textAlign: "center" }}>
                The Retire Wealthy Guides (RWG) is a global community where people share retirement ideas, learn from one another, and find inspiration for the next chapter of life.
              </p>

              <p style={{ color: "#9aaebc", fontSize: 15, lineHeight: 1.6, margin: 0, textAlign: "center" }}>
                Our worldwide community is supported from the <strong>United States, Australia, and the United Kingdom</strong>, bringing together members from across the globe in a diverse environment where people from different cultures and backgrounds can connect, learn, and inspire one another.
              </p>

              <p style={{ color: "#9aaebc", fontSize: 15, lineHeight: 1.6, margin: 0, textAlign: "center" }}>
                The Retire Wealthy Guides also unites top financial experts to help you invest smarter, trade confidently, eliminate debt, build wealth, and strengthen your retirement finances. With shared tools, free education, support, insights, and step-by-step guidance, we're here to help you grow residual income and achieve your long-term financial freedom and retirement goals.
              </p>
            </div>

            {/* Invitation Headline */}
            <p style={{ color: "#ffffff", fontWeight: 600, fontSize: 16, marginBottom: 20, letterSpacing: "-0.01em" }}>
              Join us on WhatsApp or Telegram
            </p>

            {/* Clean UI Messaging Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                style={{
                  background: "#25d366",
                  color: "#ffffff",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 16,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
        {/* Hero Banner */}
<div style={{ position: "relative", height: "220px", width: "100%" }}>
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
        "linear-gradient(to bottom, rgba(22,37,47,0), rgba(22,37,47,.25), #16252f)",
    }}
  />
</div>

{/* Main Content */}
<div style={{ padding: "0 24px 40px", textAlign: "center" }}>

  <h1
    style={{
      color: "#fff",
      fontWeight: 700,
      fontSize: 34,
      lineHeight: 1.2,
      marginTop: 10,
      marginBottom: 18,
    }}
  >
    Let's build <br />
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
      color: "#b8c7d1",
      fontSize: 17,
      lineHeight: 1.7,
      marginBottom: 32,
      maxWidth: 330,
      marginInline: "auto",
    }}
  >
    Helping investors build wealth, trade confidently, eliminate debt and
    retire with financial freedom.
  </p>

  {/* Contact Buttons */}

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 14,
      marginBottom: 48,
    }}
  >

    {/* WhatsApp */}

    <Link
      href={WHATSAPP_URL}
      target="_blank"
      style={{
        background: "#25d366",
        color: "#fff",
        padding: "16px",
        borderRadius: "12px",
        textDecoration: "none",
        fontWeight: 700,
        fontSize: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      Chat on WhatsApp
    </Link>

    {/* Telegram */}

    <Link
      href={TELEGRAM_URL}
      target="_blank"
      style={{
        background: "#24a1de",
        color: "#fff",
        padding: "16px",
        borderRadius: "12px",
        textDecoration: "none",
        fontWeight: 700,
        fontSize: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      Join us on Telegram
    </Link>

  </div>

  {/* About */}

  <div style={{ marginBottom: 40 }}>

    <h2
      style={{
        color: "#fff",
        fontSize: 20,
        marginBottom: 14,
      }}
    >
      About RWG
    </h2>

    <p
      style={{
        color: "#9fb0bc",
        fontSize: 15,
        lineHeight: 1.7,
      }}
    >
      Retire Wealthy Guides (RWG) is a global community where people share
      retirement ideas, improve their financial knowledge, and inspire one
      another to build a more secure future.
    </p>

  </div>

  {/* Global Community */}

  <div style={{ marginBottom: 40 }}>

    <h2
      style={{
        color: "#fff",
        fontSize: 20,
        marginBottom: 18,
      }}
    >
      Our Global Community
    </h2>

    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: 20,
        color: "#cfa043",
        fontWeight: 600,
      }}
    >
      <span>🇺🇸 USA</span>
      <span>🇦🇺 Australia</span>
      <span>🇬🇧 UK</span>
    </div>

    <p
      style={{
        color: "#9fb0bc",
        fontSize: 15,
        lineHeight: 1.7,
      }}
    >
      Supported across three continents, our members come from diverse
      cultures and backgrounds, creating a welcoming community where everyone
      can learn, grow and succeed together.
    </p>

  </div>

  {/* What You'll Gain */}

  <div>

    <h2
      style={{
        color: "#fff",
        fontSize: 20,
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
        ["📈", "Smarter Investing"],
        ["📊", "Confident Trading"],
        ["💰", "Debt Reduction"],
        ["🏖️", "Retirement Planning"],
        ["🤝", "Expert Guidance & Community"],
      ].map(([icon, title]) => (
        <div
          key={title}
          style={{
            background: "#1b2d38",
            borderRadius: 14,
            padding: "18px",
            textAlign: "left",
            border: "1px solid rgba(255,255,255,.05)",
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            {icon} {title}
          </div>

          <p
            style={{
              color: "#8ea3b1",
              fontSize: 14,
              marginTop: 8,
              marginBottom: 0,
              lineHeight: 1.6,
            }}
          >
            Practical education, proven strategies and ongoing support to
            strengthen your financial future.
          </p>

        </div>
      ))}

    </div>

  </div>

  <p
    style={{
      color: "#748a99",
      fontSize: 14,
      marginTop: 32,
    }}
  >
    We typically respond within a few hours.
  </p>

</div>
