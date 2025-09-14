import React from "react";


function Home({ onLogin }) {
  return (
    <div className="home-container">
      <h1 className="home-title">WattWise</h1>
      <p className="home-description">
        Welcome to the Energy Management portal. Explore tools and tips for smarter
        energy use and sustainability.
      </p>

      <div className="button-container">
        <button onClick={onLogin} className="btn signin">
          Sign In
        </button>
        <button onClick={onLogin} className="btn signup">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Home;
