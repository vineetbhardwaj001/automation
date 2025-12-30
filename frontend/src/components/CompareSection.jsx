import "../assets/styles/compare-section.css";
import bgImg from "../assets/new.jpg";
import MagicBento from "./MagicBento";

export default function CompareSection() {
  return (
    <section
      className="compare-section"
      // style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* 🔮 MAGIC BENTO GRID */}
      <div className="bento-wrapper">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </section>
  );
}
