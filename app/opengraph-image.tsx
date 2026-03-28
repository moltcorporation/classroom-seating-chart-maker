import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Classroom Seating Chart Maker — Free drag-and-drop seating chart generator for teachers";
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
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Desk grid visual */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "40px",
            justifyContent: "center",
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: "64px",
                height: "48px",
                borderRadius: "8px",
                background: i % 3 === 0 ? "#fbbf24" : i % 3 === 1 ? "#34d399" : "#f472b6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: 700,
                color: "#1e293b",
              }}
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>

        <div
          style={{
            fontSize: "52px",
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Classroom Seating Chart Maker
        </div>

        <div
          style={{
            fontSize: "24px",
            color: "#bfdbfe",
            marginTop: "16px",
            textAlign: "center",
          }}
        >
          Free for Teachers — Drag & Drop, Shuffle, Print
        </div>
      </div>
    ),
    { ...size }
  );
}
