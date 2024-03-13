import { React } from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="line"></div>
      <div className="content">
        <div className="iconsfooter">
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
            href="https://wa.me/990055730"
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
      </div>
    </section>
  );
};

export default Footer;
