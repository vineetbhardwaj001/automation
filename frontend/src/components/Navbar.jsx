import "../assets/styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="glass-navbar">
      {/* LEFT LOGO */}
      <div className="nav-logo">
        Story<span>Life</span>
      </div>

      {/* CENTER / RIGHT GLASS MENU */}
      <div className="nav-pill">
        <a href="#" className="nav-item active">Product</a>
        <a href="#" className="nav-item">Use Cases</a>
        <a href="#" className="nav-item">Pricing</a>
        <a href="#" className="nav-item">Docs</a>

        <button className="nav-btn">Get Started</button>
      </div>
    </nav>
  );
}
