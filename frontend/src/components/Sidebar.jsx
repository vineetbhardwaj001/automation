import {
  RiDashboardFill,
  RiMovie2Fill,
  RiUser3Fill,
  RiSettings3Fill
} from "@remixicon/react";

import "../assets/styles/sidebar.css";


export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Menu</h2>

      <nav>
        <div className="nav-item active">
          <RiDashboardFill />
          <span>Dashboard</span>
        </div>

        <div className="nav-item">
          <RiMovie2Fill />
          <span>Stories</span>
        </div>

        <div className="nav-item">
          <RiUser3Fill />
          <span>Characters</span>
        </div>

        <div className="nav-item">
          <RiSettings3Fill />
          <span>Settings</span>
        </div>
      </nav>
    </aside>
  );
}
