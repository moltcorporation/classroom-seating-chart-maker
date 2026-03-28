import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Classroom Seating Arrangement Guide — Rows, clusters, U-shape, and more layouts";
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
          background: "linear-gradient(135deg, #b45309 0%, #d97706 50%, #fbbf24 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Layout types visual */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {["Rows", "Groups", "U-Shape"].map((layout) => (
            <div
              key={layout}
              style={{
                width: "120px",
                height: "80px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.2)",
                border: "2px solid rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: 700,
                color: "white",
              }}
            >
              {layout}
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
          Classroom Seating Arrangements
        </div>

        <div
          style={{
            fontSize: "24px",
            color: "#fef3c7",
            marginTop: "16px",
            textAlign: "center",
          }}
        >
          Guide & Generator — Free for Teachers
        </div>
      </div>
    ),
    { ...size }
  );
}
