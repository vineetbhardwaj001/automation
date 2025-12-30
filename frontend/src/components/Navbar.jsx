import "../assets/styles/navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="glass-navbar">
      {/* LEFT LOGO */}
      <div
        className="nav-logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        Story<span>Life</span>
      </div>

      {/* CENTER / RIGHT GLASS MENU */}
      <div className="nav-pill">
        <button
          className="nav-item active"
          onClick={() => navigate("/product")}
        >
          Product
        </button>

        <button
          className="nav-item"
          onClick={() => navigate("/use-cases")}
        >
          Use Cases
        </button>

        <button
          className="nav-item"
          onClick={() => navigate("/pricing")}
        >
          Pricing
        </button>

        <button
          className="nav-item"
          onClick={() => navigate("/docs")}
        >
          Docs
        </button>

        <button
          className="nav-btn"
          onClick={() => navigate("/dashboard")}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
