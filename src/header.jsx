import React, { useState } from "react";

const Header = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <nav>
      <div className="underline">
        {" "}
        <h1 className="name">Roberto Lapetina</h1>
        <ul className="menu">
          <li>
            <a
              href="#about"
              className={`menu-link ${
                selectedLink === "about" ? "selected" : ""
              }`}
              onClick={() => handleLinkClick("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#professional"
              className={`menu-link ${
                selectedLink === "professional" ? "selected" : ""
              }`}
              onClick={() => handleLinkClick("professional")}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#academic"
              className={`menu-link ${
                selectedLink === "academic" ? "selected" : ""
              }`}
              onClick={() => handleLinkClick("academic")}
            >
              Academic
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`menu-link ${
                selectedLink === "projects" ? "selected" : ""
              }`}
              onClick={() => handleLinkClick("projects")}
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
