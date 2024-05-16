import React, { useEffect } from "react";

const Cover = () => {
  useEffect(() => {
    const titulo = document.querySelector(".hello");
    ativaLetra(titulo);
  }, []);

  const ativaLetra = (elemento) => {
    const arrTexto = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    arrTexto.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 50 * i);
    });
  };

  return (
    <section className={"backgroundimage"}>
      <h2 className="hello">Hey there, I'm a </h2>

      <h1 className="front">Data</h1>
      <h1 className="developer">Enginner</h1>
      <p className="intro">
        As a recent graduate in Computer Engineering and passionate about the
        field of data, I'm eager to delve into both data engineering and data
        analysis. My journey is focused on learning and excelling in this
        sector, continually seeking innovative solutions and generating
        beneficial insights and analyses for companies.
      </p>
      <a
        class="button"
        href="https://drive.google.com/file/d/1ur8K2iRm3R1l27VoeluVpJ0SG9AzgN3D/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
      </a>
    </section>
  );
};
export default Cover;
