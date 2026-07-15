"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [whatsapp, setWhatsapp] = useState("");
  const [telegram, setTelegram] = useState("");
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
        setLoading(false);
      });
  }, [authed]);

  async function handleLogin(e) {
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

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setSaveMessage("");
    const res = await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "update", whatsapp, telegram }),
    });
    const data = await res.json();
    setSaving(false);
    setSaveMessage(data.success ? "Saved!" : data.error || "Failed to save");
  }

  if (!authed) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16252f",
          padding: 24,
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            width: "100%",
            maxWidth: 360,
            background: "#1e313d",
            padding: 32,
            borderRadius: 16,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <h1 style={{ color: "#fff", fontSize: 22, margin: 0 }}>Admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{
              padding: "12px 14px",
              borderRadius: 10,
              border: "1px solid #33495a",
              background: "#16252f",
              color: "#fff",
              fontSize: 16,
            }}
          />
          {loginError && (
            <p style={{ color: "#f87171", fontSize: 14, margin: 0 }}>{loginError}</p>
          )}
          <button
            type="submit"
            style={{
              padding: "12px 14px",
              borderRadius: 10,
              border: "none",
              background: "#cfa043",
              color: "#16252f",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Log In
          </button>
        </form>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#16252f",
        padding: 24,
      }}
    >
      <form
        onSubmit={handleSave}
        style={{
          width: "100%",
          maxWidth: 420,
          background: "#1e313d",
          padding: 32,
          borderRadius: 16,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <h1 style={{ color: "#fff", fontSize: 22, margin: 0 }}>Edit Links</h1>

        {loading ? (
          <p style={{ color: "#b7c6d1" }}>Loading current links...</p>
        ) : (
          <>
            <label style={{ color: "#b7c6d1", fontSize: 14 }}>
              WhatsApp Link
              <input
                type="text"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                style={{
                  width: "100%",
                  marginTop: 6,
                  padding: "12px 14px",
                  borderRadius: 10,
                  border: "1px solid #33495a",
                  background: "#16252f",
                  color: "#fff",
                  fontSize: 15,
                  boxSizing: "border-box",
                }}
              />
            </label>

            <label style={{ color: "#b7c6d1", fontSize: 14 }}>
              Telegram Link
              <input
                type="text"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                style={{
                  width: "100%",
                  marginTop: 6,
                  padding: "12px 14px",
                  borderRadius: 10,
                  border: "1px solid #33495a",
                  background: "#16252f",
                  color: "#fff",
                  fontSize: 15,
                  boxSizing: "border-box",
                }}
              />
            </label>

            <button
              type="submit"
              disabled={saving}
              style={{
                padding: "12px 14px",
                borderRadius: 10,
                border: "none",
                background: "#cfa043",
                color: "#16252f",
                fontWeight: 700,
                fontSize: 16,
                cursor: saving ? "default" : "pointer",
                opacity: saving ? 0.7 : 1,
              }}
            >
              {saving ? "Saving..." : "Save"}
            </button>

            {saveMessage && (
              <p
                style={{
                  color: saveMessage === "Saved!" ? "#4ade80" : "#f87171",
                  fontSize: 14,
                  margin: 0,
                }}
              >
                {saveMessage}
              </p>
            )}
          </>
        )}
      </form>
    </main>
  );
}
