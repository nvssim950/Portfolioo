import { ImageResponse } from "next/og";
import { PROFILE } from "@/lib/data";

export const alt = `${PROFILE.name} — ${PROFILE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 30%, transparent 70%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 999,
                background: "#fafafa",
                color: "#0a0a0a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: -1,
              }}
            >
              nb
            </div>
            <div
              style={{
                fontSize: 22,
                color: "rgba(250,250,250,0.85)",
                fontWeight: 500,
              }}
            >
              {PROFILE.name}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 16px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.03)",
              color: "rgba(250,250,250,0.75)",
              fontSize: 16,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "#4ade80",
              }}
            />
            Available · Q2 2026
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 26,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 500,
              lineHeight: 0.98,
              letterSpacing: -3.5,
              maxWidth: 1000,
            }}
          >
            Building automations &amp; AI agents that actually ship.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(250,250,250,0.60)",
              lineHeight: 1.35,
              maxWidth: 900,
            }}
          >
            {PROFILE.subhead}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 18,
            color: "rgba(250,250,250,0.55)",
            letterSpacing: 2.5,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <div>{PROFILE.role}</div>
          <div>{PROFILE.location}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
