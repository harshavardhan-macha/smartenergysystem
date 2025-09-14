import React from 'react';


function Header() {
  return (
    <header className="header">
      <h1 className="title">Real-Time Energy Dashboard</h1>
      <span
        className="status-indicator online"
        aria-label="Online and connected status"
        role="status"
      >
        <span className="status-dot"></span>
        Online &bull; IoT Connected
      </span>
    </header>
  );
}

export default Header;
