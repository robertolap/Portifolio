import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
