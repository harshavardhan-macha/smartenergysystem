import React from "react";
import './app.css'
function Header({ toggleSidebar }) {
  return (
    <header class="header">
      <button
        class="hamburger"
        aria-label="Open sidebar"
        onClick={toggleSidebar}
      >
        {/* Hamburger icon (three lines) */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </svg>
      </button>
      <h1 className="title">Real-Time Energy Dashboard</h1>
      <span
        className="status-indicator"
        aria-label="Online and connected status"
        role="status"
      >
        <span class="status-dot"></span>
        Online &bull; IoT Connected
      </span>
    </header>
  );
}

export default Header;
