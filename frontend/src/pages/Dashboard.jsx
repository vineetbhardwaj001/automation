import { useState } from "react";
import "../assets/styles/dashboard.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import CharacterCards from "../components/Character";
import ProgressBox from "../components/ProgressBox";
import ResultSection from "../components/ResultSection";

export default function Dashboard() {
  const [link, setLink] = useState("");
  const [prompt, setPrompt] = useState("");
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);

  const handleAnalyze = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setDone(true);
    }, 3000);
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Topbar />

        {/* LINK INPUT */}
        <input
          className="video-input"
          placeholder="Paste your video link here..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        {/* CHARACTER SECTION */}
        <h3 className="section-title">Character Style Selection</h3>

        <textarea
          className="prompt-input"
          placeholder="Describe your character style (optional)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <CharacterCards />

        <button className="analyze-btn" onClick={handleAnalyze}>
          Analyze & Create Scenes
        </button>

        {processing && <ProgressBox />}
        {done && <ResultSection />}
      </div>
    </div>
  );
}
