import "../assets/styles/hero.css";
import heroImg from "../assets/hero.jpg";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <Navbar />

      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Every Story <br />
            Deserves <span>A New Life</span>
          </h1>

          <p>
            Bring a moment. Watch it become <br />
            something unforgettable.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => navigate("/dashboard")}
            >
              Start Creating
            </button>

            <button
              className="btn-secondary"
              onClick={() => navigate("/dashboard")}
            >
              See the Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
