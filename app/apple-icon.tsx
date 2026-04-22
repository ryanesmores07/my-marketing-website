import { ImageResponse } from "next/og";
import profileImage from "@/public/images/ernieryan-main-photo.png";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          borderRadius: "24%",
          overflow: "hidden",
          background: "#0b1020",
        }}
      >
        <img
          src={profileImage.src}
          alt="Ernie Ryan apple touch icon"
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
