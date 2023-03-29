import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <h1>Bryan Caldera's Personal Site</h1>
      <ul>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;