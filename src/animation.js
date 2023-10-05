import { React, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import git from "./img/git.png";
import js from "./img/js.png";
import react from "./img/react.png";
import html from "./img/html.png";
import css from "./img/css.png";
import sql from "./img/sql.png";

export function ativaLetra(elemento) {
  const arrTexto = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  arrTexto.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
}

const EducationCarousel = () => {
  return (
    <div className="resume_education">
      <h2 className="educationtitle">Education</h2>

      <Carousel
        className="edu"
        infiniteLoop={true}
        autoPlay={true}
        interval={8000}
        showStatus={false}
      >
        <div className="carousel-slide">
          <h3>Computer Engineering</h3>
          <p>Bachelor Degree - Fiap</p>
          <span>2019-2023</span>
        </div>

        <div className="carousel-slide">
          <h3>Machining Technician</h3>
          <p>Senai</p>
          <span>2008-2009</span>
        </div>

        <div className="carousel-slide">
          <h3>Business Management</h3>
          <p>Centro Paula Souza</p>
          <span>2010-2011</span>
        </div>
      </Carousel>
    </div>
  );
};

const CertificationCarousel = () => {
  return (
    <div className="resume_education">
      <h2 className="educationtitle">Certification</h2>

      <Carousel
        className="edu"
        infiniteLoop={true}
        autoPlay={true}
        interval={8000}
        showStatus={false}
      >
        <div className="carousel-slide">
          <h3>AWS </h3>
          <p>Cloud Practitioner</p>
          <span>2023-2026</span>
        </div>

        <div className="carousel-slide">
          <h3>AWS Partner: </h3>
          <p>Accreditation</p>
          <span>2023-2026</span>
        </div>

        <div className="carousel-slide">
          <h3>AWS Partner:</h3>
          <p> SAP on AWS</p>
          <span>2023-2026</span>
        </div>
      </Carousel>
    </div>
  );
};

export { EducationCarousel, CertificationCarousel };

const Card = () => {
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
    <div className="card-container" ref={cardRef} onMouseMove={handleMouseMove}>
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
  );
};

export default Card;
