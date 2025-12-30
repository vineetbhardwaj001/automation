import { RiSearchLine, RiNotification3Line } from "@remixicon/react";
import "../assets/styles/topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      {/* LEFT BRAND */}
      <div className="topbar-left">
        <span className="brand">StoryLife</span>
      </div>

      {/* CENTER SEARCH */}
      <div className="topbar-center">
        <RiSearchLine className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
      </div>

      {/* RIGHT USER */}
      <div className="topbar-right">
        <RiNotification3Line className="icon" />
        <div className="user-avatar">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
          />
        </div>
      </div>
    </div>
  );
}
