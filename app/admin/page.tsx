"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [whatsapp, setWhatsapp] = useState("");
  const [telegram, setTelegram] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [telegramUsername, setTelegramUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    if (!authed) return;
    fetch("/api/admin")
      .then((res) => res.json())
      .then((data) => {
        setWhatsapp(data.whatsapp || "");
        setTelegram(data.telegram || "");
        setWhatsappNumber(data.whatsappNumber || "");
        setTelegramUsername(data.telegramUsername || "");
        setLoading(false);
      });
  }, [authed]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    const res = await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "login", password }),
    });
    const data = await res.json();
    if (data.success) {
      setAuthed(true);
    } else {
      setLoginError(data.error || "Login failed");
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setSaveMessage("");
    const res = await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "update",
        whatsapp,
        telegram,
        whatsappNumber,
        telegramUsername,
      }),
    });
    const data = await res.json();
    setSaving(false);
    setSaveMessage(data.success ? "Saved!" : data.error || "Failed to save");
  }

  // --- Design Tokens ---
  const theme = {
    bg: "#FAF8F5",
    cardBg: "#FFFFFF",
    primary: "#0F2535",
    accent: "#C9A87C",
    accentHover: "#B8966A",
    text: "#1E293B",
    muted: "#64748B",
    border: "#E2E8F0",
    errorBg: "#FEF2F2",
    errorText: "#EF4444",
    successBg: "#F0FDF4",
    successText: "#16A34A",
    whatsapp: "#25D366",
    telegram: "#0088CC",
    admauth: "0f2535",
  };

  // --- Login State Screen ---
  if (!authed) {
    return (
      <main
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: theme.bg,
          padding: 24,
          fontFamily: "var(--font-body), sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 400,
            background: theme.cardBg,
            padding: "40px 32px",
            borderRadius: 20,
            border: `1px solid ${theme.border}`,
            boxShadow: "0 12px 32px rgba(15, 37, 53, 0.06)",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(201, 168, 124, 0.15)",
                color: theme.accent,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h1 style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic", color: theme.primary, fontSize: 28, margin: "0 0 6px", fontWeight: 700 }}>
              Admin Portal
            </h1>
            <p style={{ color: theme.muted, fontSize: 14, margin: 0 }}>
              Enter  password
            </p>
          </div>

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <label style={{ display: "block", color: theme.text, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: 12,
                  border: `1.5px solid ${theme.border}`,
                  background: "#FAFAFA",
                  color: theme.text,
                  fontSize: 15,
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = theme.accent)}
                onBlur={(e) => (e.target.style.borderColor = theme.border)}
              />
            </div>

            {loginError && (
              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  background: theme.errorBg,
                  border: `1px solid rgba(239, 68, 68, 0.2)`,
                  color: theme.errorText,
                  fontSize: 13,
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {loginError}
              </div>
            )}

            <button
              type="submit"
              style={{
                marginTop: 6,
                padding: "14px",
                borderRadius: 12,
                border: "none",
                background: theme.primary,
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(15, 37, 53, 0.15)",
                transition: "transform 0.1s ease, background-color 0.2s ease",
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Authenticate
            </button>
          </form>
        </div>
      </main>
    );
  }

  // --- Authenticated Admin Dashboard ---
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme.bg,
        padding: 24,
        fontFamily: "var(--font-body), sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 460,
          background: theme.cardBg,
          padding: "40px 32px",
          borderRadius: 20,
          border: `1px solid ${theme.border}`,
          boxShadow: "0 12px 32px rgba(15, 37, 53, 0.06)",
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        {/* Header Bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${theme.border}`, paddingBottom: 20 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(22, 163, 74, 0.1)", color: theme.successText, padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600, marginBottom: 8 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: theme.successText }}></span>
              Authenticated
            </div>
            <h1 style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic", color: theme.primary, fontSize: 26, margin: 0, fontWeight: 700 }}>
              Edit Community Links
            </h1>
          </div>

          <button
            onClick={() => setAuthed(false)}
            style={{
              background: "#FA7578",
              border: `1px solid ${theme.text}`,
              color: theme.admauth,
              padding: "8px 12px",
              borderRadius: 10,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Lock
          </button>
        </div>

        {loading ? (
          <div style={{ padding: "32px 0", textAlign: "center", color: theme.muted, fontSize: 14 }}>
            <div
              style={{
                width: 24,
                height: 24,
                border: `3px solid ${theme.border}`,
                borderTopColor: theme.accent,
                borderRadius: "50%",
                margin: "0 auto 12px",
                animation: "spin 0.8s linear infinite",
              }}
            />
            <style dangerouslySetInnerHTML={{ __html: `@keyframes spin { to { transform: rotate(360deg); } }` }} />
            Retrieving database values...
          </div>
        ) : (
          <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* WhatsApp Group URL */}
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: theme.text, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: theme.whatsapp }} />
                WhatsApp Group URL
              </label>
              <input
                type="text"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="https://wa.link/..."
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: 12,
                  border: `1.5px solid ${theme.border}`,
                  background: "#FAFAFA",
                  color: theme.text,
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = theme.whatsapp)}
                onBlur={(e) => (e.target.style.borderColor = theme.border)}
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: theme.text, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: theme.whatsapp }} />
                WhatsApp Number
              </label>
              <input
                type="text"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="+1 (929) 607-2719"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: 12,
                  border: `1.5px solid ${theme.border}`,
                  background: "#FAFAFA",
                  color: theme.text,
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = theme.whatsapp)}
                onBlur={(e) => (e.target.style.borderColor = theme.border)}
              />
            </div>

            {/* Telegram Channel URL */}
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: theme.text, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: theme.telegram }} />
                Telegram Channel URL
              </label>
              <input
                type="text"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                placeholder="https://t.me/..."
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: 12,
                  border: `1.5px solid ${theme.border}`,
                  background: "#FAFAFA",
                  color: theme.text,
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = theme.telegram)}
                onBlur={(e) => (e.target.style.borderColor = theme.border)}
              />
            </div>

            {/* Telegram Username */}
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: theme.text, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: theme.telegram }} />
                Telegram Username
              </label>
              <input
                type="text"
                value={telegramUsername}
                onChange={(e) => setTelegramUsername(e.target.value)}
                placeholder="@RetireWealthyGuides"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: 12,
                  border: `1.5px solid ${theme.border}`,
                  background: "#FAFAFA",
                  color: theme.text,
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = theme.telegram)}
                onBlur={(e) => (e.target.style.borderColor = theme.border)}
              />
            </div>

            {/* Save Button */}
            <button
              type="submit"
              disabled={saving}
              style={{
                marginTop: 8,
                padding: "14px",
                borderRadius: 12,
                border: "none",
                background: theme.accent,
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: 15,
                cursor: saving ? "default" : "pointer",
                opacity: saving ? 0.7 : 1,
                boxShadow: "0 4px 14px rgba(201, 168, 124, 0.3)",
                transition: "transform 0.1s ease, background-color 0.2s ease",
              }}
              onMouseDown={(e) => !saving && (e.currentTarget.style.transform = "scale(0.98)")}
              onMouseUp={(e) => !saving && (e.currentTarget.style.transform = "scale(1)")}
            >
              {saving ? "Updating Database..." : "Save Changes"}
            </button>

            {/* Status Notifications */}
            {saveMessage && (
              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: 10,
                  background: saveMessage === "Saved!" ? theme.successBg : theme.errorBg,
                  border: `1px solid ${saveMessage === "Saved!" ? "rgba(22, 163, 74, 0.2)" : "rgba(239, 68, 68, 0.2)"}`,
                  color: saveMessage === "Saved!" ? theme.successText : theme.errorText,
                  fontSize: 13,
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                {saveMessage === "Saved!" ? "✓ Dynamic URLs successfully updated!" : saveMessage}
              </div>
            )}
          </form>
        )}
      </div>
    </main>
  );
}
