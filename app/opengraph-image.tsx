import { ImageResponse } from "next/og";
import { site } from "./data/site";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0a0a0b",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#fafafa",
              color: "#0a0a0b",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            AA
          </div>
          <div style={{ fontSize: 26, color: "#a1a1aa" }}>{site.url.replace("https://", "")}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: "#fbbf24", letterSpacing: 2, textTransform: "uppercase" }}>
            {`${site.title} · ${site.company}`}
          </div>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, marginTop: 16 }}>{site.name}</div>
          <div style={{ fontSize: 36, color: "#a1a1aa", marginTop: 16, maxWidth: 900 }}>
            Secure, real-time web applications with React, Next.js and TypeScript.
          </div>
        </div>

        <div style={{ fontSize: 24, color: "#a1a1aa" }}>{site.location}</div>
      </div>
    ),
    size
  );
}
