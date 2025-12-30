import { useEffect, useRef } from "react";
import CharacterCard from "./CharacterCard";
import "../assets/styles/character.css";
import realistic from "../assets/characters/realistic.png";
import animated from "../assets/characters/animated.png";
import artistic from "../assets/characters/artistic.png";
import dark from "../assets/characters/dark.png";
import soft from "../assets/characters/Soft.png";


const styles = [
  { name: "Realistic", image: realistic },
  { name: "Animated", image: animated },
  { name: "Artistic", image: artistic},
  { name: "Dark Mood", image: dark },
  { name: "Soft Emotional", image: soft },
];

export default function CharacterSection() {
  const sectionRef = useRef(null);
  console.log(styles);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("visible");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
  }, []);

  const handleSelect = (style) => {
    console.log("Selected character style:", style);
    // 👉 NEXT AI STEP CALL HERE
  };

  return (
    <section
      ref={sectionRef}
      className="character-section"
    //   style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="character-overlay"></div>

      <div className="character-content">
        <h2>Choose Your Character Style</h2>
        <p>Select a visual identity that defines your story.</p>

        <div className="character-row">
          {styles.map((item) => (
            <CharacterCard
              key={item.name}
              data={item}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
