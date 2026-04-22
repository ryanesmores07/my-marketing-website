import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default async function Icon() {
  const imagePath = join(
    process.cwd(),
    "public",
    "images",
    "ernieryan-main-photo.png",
  );
  const imageBuffer = await readFile(imagePath);
  const imageDataUrl = `data:image/png;base64,${imageBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          borderRadius: "50%",
          overflow: "hidden",
          background: "#0b1020",
        }}
      >
        <img
          src={imageDataUrl}
          alt="Ernie Ryan favicon portrait"
          width={size.width}
          height={size.height}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 22%",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
