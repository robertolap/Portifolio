import { React } from "react";

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
      <ul>
        <li>
          <a href="#aboutMe">About Me</a>
        </li>
        <li>
          <a href="#professional">Work Experience</a>
        </li>
        <li>
          <a href="#academic">Academic</a>
        </li>
        <li>
          <a href="#projects">College Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
