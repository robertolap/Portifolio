import React from "react";
import git from "./img/git.png";
import js from "./img/js.png";
import react from "./img/react.png";
import html from "./img/html.png";
import css from "./img/css.png";
import sql from "./img/sql.png";
import china from "../src/img/china.png";
import eua from "../src/img/eua.png";
import brasil from "../src/img/brasil.png";
import spain from "../src/img/spain.png";

const Skillslang = () => {
  return (
    <>
      <section className="skillslang">
        <div>
          <h1 className="sk">Skills</h1>
        </div>

        <table className="skills">
          <tr>
            <td>
              <h2>Git</h2>
              <img src={git} alt="git" />
            </td>
            <td>
              <h2>JS</h2>
              <img src={js} alt="js" />
            </td>
          </tr>
          <tr>
            <td>
              <h2>React</h2>
              <img src={react} alt="react" />
            </td>
            <td>
              <h2>HTML 5</h2>
              <img src={html} alt="html" />
            </td>
          </tr>
          <tr>
            <td>
              <h2>CSS</h2>
              <img src={css} alt="css" />
            </td>
            <td>
              <h2>SQL</h2>
              <img src={sql} alt="sql" />
            </td>
          </tr>
        </table>

        <div className="language">
          <h1 className="lg">Languages</h1>
          <div className="lg-container">
            <img src={eua} alt="eua"></img>
            <span>Advanced</span>
            <img src={china} alt="china"></img>
            <span>Basic</span>
            <img src={spain} alt="spain"></img>
            <span>Basic</span>
            <img src={brasil} alt="brasil"></img>
            <span>Native</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skillslang;
