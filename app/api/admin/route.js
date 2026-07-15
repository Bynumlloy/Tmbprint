import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

// Ensures the table exists. Safe to call every time (IF NOT EXISTS).
async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS site_links (
      id INT PRIMARY KEY DEFAULT 1,
      whatsapp_url TEXT NOT NULL,
      telegram_url TEXT NOT NULL
    )
  `;
  // Seed a default row if none exists yet, using your current links.
  await sql`
    INSERT INTO site_links (id, whatsapp_url, telegram_url)
    VALUES (1, 'https://wa.link/26glqx', 'https://telegram.me/RetireWealthyGuides')
    ON CONFLICT (id) DO NOTHING
  `;
}

function isAuthed(req) {
  const cookie = req.cookies.get("admin_session");
  return cookie?.value === process.env.ADMIN_PASSWORD;
}

// GET: fetch current links (public — used by homepage)
export async function GET() {
  await ensureTable();
  const rows = await sql`SELECT whatsapp_url, telegram_url FROM site_links WHERE id = 1`;
  const row = rows[0];
  return NextResponse.json({
    whatsapp: row?.whatsapp_url ?? "",
    telegram: row?.telegram_url ?? "",
  });
}

// POST: log in with password -> sets a session cookie, or update links if already authed
export async function POST(req) {
  const body = await req.json();

  if (body.action === "login") {
    if (body.password === process.env.ADMIN_PASSWORD) {
      const res = NextResponse.json({ success: true });
      res.cookies.set("admin_session", body.password, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
      return res;
    }
    return NextResponse.json({ success: false, error: "Incorrect password" }, { status: 401 });
  }

  if (body.action === "update") {
    if (!isAuthed(req)) {
      return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });
    }
    await ensureTable();
    await sql`
      UPDATE site_links
      SET whatsapp_url = ${body.whatsapp}, telegram_url = ${body.telegram}
      WHERE id = 1
    `;
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false, error: "Unknown action" }, { status: 400 });
}
