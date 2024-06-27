import "./LogoReact.css"
import logo from './logo.svg';
import React from "react";

function ReactLogo() {
    return(
        <div className="nav">
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <nav className="nav-links">
          <a class="link" href="#home">Home</a>
          <a class="link" href="#about">About</a>
          <a class="link" href="#contact">Contact</a>
        </nav>
      </div>
    );
}

export default ReactLogo;