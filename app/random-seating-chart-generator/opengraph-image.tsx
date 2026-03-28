import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Random Seating Chart Generator — Shuffle students into new seats instantly";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Shuffle icon visual */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginBottom: "40px",
            alignItems: "center",
          }}
        >
          {["A", "D", "B", "F", "C", "E"].map((letter, i) => (
            <div
              key={i}
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: 700,
                color: "white",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            >
              {letter}
            </div>
          ))}
        </div>

        <div
          style={{
            fontSize: "48px",
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Random Seating Chart Generator
        </div>

        <div
          style={{
            fontSize: "24px",
            color: "#a7f3d0",
            marginTop: "16px",
            textAlign: "center",
          }}
        >
          Shuffle Students Into New Seats Instantly
        </div>
      </div>
    ),
    { ...size }
  );
}
