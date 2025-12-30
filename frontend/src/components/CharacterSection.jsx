import "../assets/styles/character-section.css";
import bgImg from "../assets/characters-bg2.png";
import { useNavigate } from "react-router-dom";
// import MagicBento from "./MagicBento";

export default function CharacterSection() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <section
      className="character-section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >

      {/* 🎯 Invisible Click Zones */}
      <div className="click-zone zone-1" onClick={goToLogin}></div>
      <div className="click-zone zone-2" onClick={goToLogin}></div>
      <div className="click-zone zone-3" onClick={goToLogin}></div>
      <div className="click-zone zone-4" onClick={goToLogin}></div>
      <div className="click-zone zone-5" onClick={goToLogin}></div>
    </section>
  );
}

//ye code ha 3d section 
// import { useEffect, useRef } from "react";
// import CharacterCard from "./CharacterCard";
// import "../assets/styles/character-section.css";
// import bgImg from "../assets/characters-bg.png";
// import realistic from "../assets/characters/realistic.png";
// import animated from "../assets/characters/animated.png";
// import artistic from "../assets/characters/artistic.png";
// import dark from "../assets/characters/dark.png";
// import soft from "../assets/characters/soft.png";


// const styles = [
//   { name: "Realistic", image: "/src/assets/characters/realistic.png" },
//   { name: "Animated", image: "/src/assets/characters/realistic.png" },
//   { name: "Artistic", image: "/src/assets/characters/realistic.png" },
//   { name: "Dark Mood", image: "/src/assets/characters/realistic.png" },
//   { name: "Soft Emotional", image: "/src/assets/characters/realistic.png" },
// ];

// export default function CharacterSection() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           sectionRef.current.classList.add("visible");
//         }
//       },
//       { threshold: 0.3 }
//     );

//     observer.observe(sectionRef.current);
//   }, []);

//   const handleSelect = (style) => {
//     console.log("Selected character style:", style);
//     // 👉 NEXT AI STEP CALL HERE
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="character-section"
//       style={{ backgroundImage: `url(${bgImg})` }}
//     >
//       <div className="character-overlay"></div>

//       <div className="character-content">
//         <h2>Choose Your Character Style</h2>
//         <p>Select a visual identity that defines your story.</p>

//         <div className="character-row">
//           {styles.map((item) => (
//             <CharacterCard
//               key={item.name}
//               data={item}
//               onSelect={handleSelect}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
