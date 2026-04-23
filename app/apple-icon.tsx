import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          padding: 24,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fafafa",
            color: "#0a0a0a",
            fontSize: 92,
            fontWeight: 700,
            fontFamily: "sans-serif",
            letterSpacing: -4,
            borderRadius: 36,
          }}
        >
          nb
        </div>
      </div>
    ),
    size,
  );
}
