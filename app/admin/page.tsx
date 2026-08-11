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

  const theme = {
    navy: "#0c1622",
    navyLight: "#111d2e",
    navyLighter: "#162536",
    gold: "#C9A35B",
    goldLight: "#E2C789",
    text: "#e8e4da",
    textMuted: "#9a958a",
    line: "#1e2d3d",
    error: "#EF4444",
    success: "#25D366",
    whatsapp: "#25D366",
    telegram: "#229ED9",
  };

  // --- Login Screen ---
  if (!authed) {
    return (
      <main
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: theme.navy,
          padding: 24,
          fontFamily: "var(--font-body), sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 420,
            background: theme.navyLight,
            padding: "48px 36px",
            borderRadius: 16,
            border: `1px solid ${theme.line}`,
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                border: `1px solid ${theme.gold}`,
                color: theme.goldLight,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
                fontFamily: "var(--font-display), serif",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              S
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display), serif",
                color: theme.text,
                fontSize: 26,
                margin: "0 0 8px",
                fontWeight: 600,
              }}
            >
              Admin Portal
            </h1>
            <p style={{ color: theme.textMuted, fontSize: 13, margin: 0 }}>
              TheSmartMoneyBlueprint
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  color: theme.textMuted,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: 10,
                  border: `1px solid ${theme.line}`,
                  background: theme.navy,
                  color: theme.text,
                  fontSize: 15,
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = theme.gold)
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = theme.line)
                }
              />
            </div>

            {loginError && (
              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: 10,
                  background: "rgba(239, 68, 68, 0.1)",
                  border: `1px solid rgba(239, 68, 68, 0.2)`,
                  color: theme.error,
                  fontSize: 13,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {loginError}
              </div>
            )}

            <button
              type="submit"
              style={{
                marginTop: 4,
                padding: "16px",
                borderRadius: 10,
                border: "none",
                background: theme.gold,
                color: theme.navy,
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "1px",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "transform 0.15s ease, opacity 0.2s ease",
              }}
              onMouseDown={(e) =>
                (e.currentTarget.style.transform = "scale(0.98)")
              }
              onMouseUp={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Authenticate
            </button>
          </form>
        </div>
      </main>
    );
  }

  // --- Dashboard ---
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme.navy,
        padding: 24,
        fontFamily: "var(--font-body), sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          background: theme.navyLight,
          padding: "40px 36px",
          borderRadius: 16,
          border: `1px solid ${theme.line}`,
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: `1px solid ${theme.line}`,
            paddingBottom: 20,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: theme.success,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: theme.success,
                }}
              />
              Authenticated
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display), serif",
                color: theme.text,
                fontSize: 24,
                margin: 0,
                fontWeight: 600,
              }}
            >
              Edit Community Links
            </h1>
          </div>

          <button
            onClick={() => setAuthed(false)}
            style={{
              background: "transparent",
              border: `1px solid ${theme.line}`,
              color: theme.textMuted,
              padding: "8px 14px",
              borderRadius: 8,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = theme.gold;
              e.currentTarget.style.color = theme.gold;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = theme.line;
              e.currentTarget.style.color = theme.textMuted;
            }}
          >
            Lock
          </button>
        </div>

        {loading ? (
          <div
            style={{
              padding: "40px 0",
              textAlign: "center",
              color: theme.textMuted,
              fontSize: 14,
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                border: `2px solid ${theme.line}`,
                borderTopColor: theme.gold,
                borderRadius: "50%",
                margin: "0 auto 14px",
                animation: "spin 0.8s linear infinite",
              }}
            />
            <style
              dangerouslySetInnerHTML={{
                __html: `@keyframes spin { to { transform: rotate(360deg); } }`,
              }}
            />
            Retrieving database values...
          </div>
        ) : (
          <form
            onSubmit={handleSave}
            style={{ display: "flex", flexDirection: "column", gap: 22 }}
          >
            {/* WhatsApp URL */}
            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: theme.textMuted,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: theme.whatsapp,
                  }}
                />
                WhatsApp Group URL
              </label>
              <input
                type="text"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="https://wa.link/..."
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: 10,
                  border: `1px solid ${theme.line}`,
                  background: theme.navy,
                  color: theme.text,
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = theme.whatsapp)
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = theme.line)
                }
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: theme.textMuted,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: theme.whatsapp,
                  }}
                />
                WhatsApp Number
              </label>
              <input
                type="text"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="+1 (929) 607-2719"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: 10,
                  border: `1px solid ${theme.line}`,
                  background: theme.navy,
                  color: theme.text,
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = theme.whatsapp)
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = theme.line)
                }
              />
            </div>

            {/* Telegram URL */}
            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: theme.textMuted,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: theme.telegram,
                  }}
                />
                Telegram Channel URL
              </label>
              <input
                type="text"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                placeholder="https://t.me/..."
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: 10,
                  border: `1px solid ${theme.line}`,
                  background: theme.navy,
                  color: theme.text,
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = theme.telegram)
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = theme.line)
                }
              />
            </div>

            {/* Telegram Username */}
            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: theme.textMuted,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: theme.telegram,
                  }}
                />
                Telegram Username
              </label>
              <input
                type="text"
                value={telegramUsername}
                onChange={(e) => setTelegramUsername(e.target.value)}
                placeholder="@username"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: 10,
                  border: `1px solid ${theme.line}`,
                  background: theme.navy,
                  color: theme.text,
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = theme.telegram)
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = theme.line)
                }
              />
            </div>

            {/* Save Button */}
            <button
              type="submit"
              disabled={saving}
              style={{
                marginTop: 6,
                padding: "16px",
                borderRadius: 10,
                border: "none",
                background: theme.gold,
                color: theme.navy,
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "1px",
                textTransform: "uppercase",
                cursor: saving ? "default" : "pointer",
                opacity: saving ? 0.6 : 1,
                transition: "transform 0.15s ease, opacity 0.2s ease",
              }}
              onMouseDown={(e) =>
                !saving && (e.currentTarget.style.transform = "scale(0.98)")
              }
              onMouseUp={(e) =>
                !saving && (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {saving ? "Updating..." : "Save Changes"}
            </button>

            {/* Status */}
            {saveMessage && (
              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: 10,
                  background:
                    saveMessage === "Saved!"
                      ? "rgba(37, 211, 102, 0.1)"
                      : "rgba(239, 68, 68, 0.1)",
                  border: `1px solid ${
                    saveMessage === "Saved!"
                      ? "rgba(37, 211, 102, 0.2)"
                      : "rgba(239, 68, 68, 0.2)"
                  }`,
                  color:
                    saveMessage === "Saved!" ? theme.success : theme.error,
                  fontSize: 13,
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                {saveMessage === "Saved!"
                  ? "✓ Changes saved successfully"
                  : saveMessage}
              </div>
            )}
          </form>
        )}
      </div>
    </main>
  );
}
