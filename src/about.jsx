import { React } from "react";
import gifImage from "./img/dev.png";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="hi">
        I'm<br></br>
        <span>Looking for</span>
      </h2>
      <p className="text1">
        A opportunities in the Software Development or Data Engineering field. I
        have experience in IT Business and FinOps, which allows me to bring a
        cost or commercial perspective to solutions that may be developed.
      </p>

      <div className="tech">
        <img src={gifImage} alt="GIF animado" />
      </div>
      <div className="icons">
        {" "}
        <a
          href="https://www.linkedin.com/in/roberto-lapetina/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/robertolap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://wa.me/5511990055730"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-whatsapp"></i>
        </a>
        <a
          href="mailto:lapetinaroberto@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-envelope"></i>
        </a>
      </div>
      <div className="linebottom"> </div>
    </section>
  );
};

export default About;
