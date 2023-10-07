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
    <section className="backgroundimage">
      <h2 className="hello">Welcome, I'm a </h2>
      <h1 className="front">Front-End</h1>
      <h1 className="developer">Developer</h1>
      <div className="introback">
        <p className="intro">
          As a junior front-end enthusiast just starting my career, I am
          learning about the world of web development, focused on problem
          solving and the user experience.
        </p>
      </div>
    </section>
  );
};
export default Cover;
