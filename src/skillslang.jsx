import React from "react";
import git from "./img/git.png";
import python from "./img/python-logo.svg";
import awscloud from "./img/aws_icon_146074.png";
import finops from "./img/finops.png";
import office from "./img/office.webp";
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
              <h2>Pyhton</h2>
              <img src={python} alt="python" />
            </td>
          </tr>
          <tr>
            <td>
              <h2>AWS Cloud</h2>
              <img src={awscloud} alt="aws" />
            </td>
            <td>
              <h2>FinOps</h2>
              <img src={finops} alt="finops" />
            </td>
          </tr>
          <tr>
            <td>
              <h2>MS Office</h2>
              <img src={office} alt="office" />
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
