import "../assets/styles/hero.css";
import heroImg from "../assets/hero.jpg";
import Navbar from "./Navbar";

export default function Hero() {
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
            <button className="btn-primary">Start Creating</button>
            <button className="btn-secondary">See the Transformation</button>
          </div>
        </div>
      </div>
    </section>
  );
}
