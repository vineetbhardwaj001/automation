import { useRef, useState } from "react";

export default function SceneCard({ src, label, type = "video" }) {
  const ref = useRef(null);
  const [ratio, setRatio] = useState("16 / 9"); // default

  const handleLoaded = () => {
    if (!ref.current) return;

    const el = ref.current;

    const width =
      type === "video" ? el.videoWidth : el.naturalWidth;
    const height =
      type === "video" ? el.videoHeight : el.naturalHeight;

    setRatio(`${width} / ${height}`);
  };

  return (
    <div
      className="scene-card auto"
      style={{ aspectRatio: ratio }}
    >
      {type === "video" ? (
        <video
          ref={ref}
          src={src}
          muted
          preload="metadata"
          onLoadedMetadata={handleLoaded}
        />
      ) : (
        <img
          ref={ref}
          src={src}
          onLoad={handleLoaded}
          alt=""
        />
      )}

      <span className="label">{label}</span>
      <span className="play">▶</span>
    </div>
  );
}
