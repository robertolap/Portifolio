/*
import React, { useRef } from "react";
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
  const cardRef = useRef(".card");

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    const y = event.nativeEvent.offsetY - 180;
    const xRotation = y / -270;
    const x = event.nativeEvent.offsetX - 180;
    const yRotation = x / 270;
    const brightness = Math.abs(-270 + x + y) / 270 + 0.1;

    if (card) {
      card.style.setProperty("--x-rotation", xRotation + "rad");
      card.style.setProperty("--y-rotation", yRotation + "rad");
      card.style.setProperty("--brightness", brightness);
    }
  };

  return (
    <>
      <section className="skillslang">
        <div>
          <h1 className="lg">Skills</h1>
        </div>
        <div>
          <h1 className="sk">Languages</h1>
        </div>
        <div
          className="card-container"
          ref={cardRef}
          onMouseMove={handleMouseMove}
        >
          <div className="card">
            <img src={git} alt="git"></img>
            <h2>Git</h2>
          </div>
          <div className="card">
            <img src={js} alt="js"></img>
            <h2>JS</h2>
          </div>
          <div className="card">
            <img src={react} alt="react"></img>
            <h2>React</h2>
          </div>
          <div className="card">
            <img src={html} alt="html"></img>
            <h2>HTML 5</h2>
          </div>
          <div className="card">
            <img src={css} alt="css"></img>
            <h2>CSS</h2>
          </div>
          <div className="card">
            <img src={sql} alt="sql"></img>
            <h2>Git</h2>
          </div>
        </div>

        <div className="language">
          <div>
            <img src={eua} alt="eua"></img>
            <h1 className="titlelan">
              English -<span>Advanced</span>
            </h1>
          </div>
          <div>
            <img src={china} alt="china"></img>
            <h1 className="titlelan">
              Mandarin -<span>Basic</span>
            </h1>
          </div>
          <div>
            <img src={spain} alt="spain"></img>
            <h1 className="titlelan">
              Spanish -<span>Basic</span>
            </h1>
          </div>
          <div>
            <img src={brasil} alt="brasil"></img>
            <h1 className="titlelan">
              Portuguese -<span>Native</span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skillslang;
*/
