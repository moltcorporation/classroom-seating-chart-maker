import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Free Seating Chart Templates for Classroom — Row, Grid, U-Shape & Groups";
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
          background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Template grid visual */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginBottom: "40px",
            alignItems: "center",
          }}
        >
          {["Rows", "Grid", "U-Shape", "Groups"].map((label, i) => (
            <div
              key={i}
              style={{
                width: "100px",
                height: "56px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                fontWeight: 700,
                color: "white",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            >
              {label}
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
          Seating Chart Templates
        </div>

        <div
          style={{
            fontSize: "24px",
            color: "#bfdbfe",
            marginTop: "16px",
            textAlign: "center",
          }}
        >
          Free Classroom Layouts — Ready to Customize
        </div>
      </div>
    ),
    { ...size }
  );
}
