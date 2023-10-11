import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      <h1 className="name">Roberto Lapetina</h1>
      <ul className="menu" id="menu">
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
      <i className="fa-solid fa-bars" id="menuIcon"></i>
    </nav>
  );
};

export default Header;
