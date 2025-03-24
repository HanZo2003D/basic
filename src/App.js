import React from "react";

import "./App.css";
import img from "./assets/main-hero.png";

const App = () => {
  return (
    <>
      <header className="section-navbar">
        <div className="container">
          <div className="navbar-brand">
            <a href="/">
              <h1>hanz</h1>
            </a>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  about
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  services
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  blog
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* herosection */}
      <main>
        <div className="section-hero">
          <div className="container grid grid-two--cols">
            <div className="section-hero--content">
              <p className="hero-subheading">Empower Hanzo Learning</p>
              <h1 className="hero-heading">
                Unlock your Potential with hanzo eduHub
              </h1>
              <p className="hero-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="hero-btn">
                <a href="/" className="btn btn-white">
                  Learn with us
                </a>
              </div>
            </div>
            <div className="section-hero--image">
              <figure>
                <img src={img} alt="a immage" />
              </figure>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
