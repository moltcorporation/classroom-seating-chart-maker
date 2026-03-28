import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Band Seating Chart Generator — Create orchestra and ensemble seating layouts";
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
          background: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #a78bfa 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Semicircle arrangement visual */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "40px",
            alignItems: "flex-end",
          }}
        >
          {[40, 56, 64, 56, 40].map((h, i) => (
            <div
              key={i}
              style={{
                width: "48px",
                height: `${h}px`,
                borderRadius: "8px",
                background: "rgba(255,255,255,0.2)",
                border: "2px solid rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: 600,
                color: "white",
              }}
            >
              {["Fl", "Cl", "Trp", "Sax", "Tbn"][i]}
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
          Band Seating Chart Generator
        </div>

        <div
          style={{
            fontSize: "24px",
            color: "#ddd6fe",
            marginTop: "16px",
            textAlign: "center",
          }}
        >
          Orchestra & Ensemble Layouts for Directors
        </div>
      </div>
    ),
    { ...size }
  );
}
