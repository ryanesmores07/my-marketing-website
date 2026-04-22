import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Ernie Ryan - Shopify development and performance marketing partner";
export const size = {
  width: 1200,
  height: 630,
};
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
          color: "#ffffff",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #831843 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#f9a8d4",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: -1,
              color: "#ffffff",
              background: "linear-gradient(135deg, #ec4899 0%, #06b6d4 100%)",
            }}
          >
            ER
          </div>
          ernieryan.dev
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Shopify Development
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "#f9a8d4",
            }}
          >
            Paid Ads &amp; SEO
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 32,
              fontWeight: 500,
              color: "#e2e8f0",
              lineHeight: 1.3,
              maxWidth: 900,
            }}
          >
            Bilingual freelance partner in Tokyo helping ecommerce brands grow
            in Japan and abroad.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#cbd5f5",
          }}
        >
          <span>Ernie Ryan - Tokyo, Japan</span>
          <span style={{ color: "#5eead4" }}>EN / 日本語</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
