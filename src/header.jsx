import React from "react";

const Header = () => {
  return (
    <nav>
      <div class="loader">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>

      <h1 className="name">Roberto Lapetina</h1>
      <ul className="menu">
        <li>
          <a href="#aboutMe">About Me</a>
        </li>
        <li>
          <a href="#professional">Work</a>
        </li>
        <li>
          <a href="#academic">Academic</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <i class="fa-solid fa-bars"></i>
    </nav>
  );
};

export default Header;
