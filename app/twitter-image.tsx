import OpengraphImage from "./opengraph-image";

export const runtime = "edge";
export const alt =
  "Ernie Ryan - Shopify development and performance marketing partner";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return OpengraphImage();
}
