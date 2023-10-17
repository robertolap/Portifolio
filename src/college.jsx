import { React } from "react";
import vivo from "./img/vivo.png";
import banco from "./img/banco.png";
import ford from "./img/ford.png";
import raizen from "./img/raizen.png";

const College = () => {
  return (
    <section className="college" id="projects">
      <h1 className="title">College Projects</h1>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <img src={raizen} alt="raizen"></img>
            <h2 className="time">2022</h2>
            <h1>Tech Learned - Next.js, Tailwind, and MongoDB, AWS</h1>
            <p>
              With the need for more sustainable initiatives, Raizen presented
              us with the challenge of developing a solution that would help
              Brazilians save energy or consume energy more efficiently. The
              solution was developed a current meter using an ESP connected to a
              sensor (ACS712) capable of measuring energy consumption, which was
              transmitted in a way that could be installed in any socket without
              the need for renovation.Through a webpage developed using Next.js,
              Tailwind, and MongoDB, consumers could see real-time energy
              consumption through graphs and receive notifications when
              consumption exceeded the established limit.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <img src={ford} alt="ford"></img>
            <h2 className="time">2021</h2>
            <h1>Tech Learned - React Native , SQL</h1>
            <p>
              Ford wanted a more customized experience for its customers and
              needed a digital solution that could add more personalization to
              its vehicles for its customers. Through a study with their Ford
              Ranger customers, we understood that these customers needed to
              check information such as the type of oil, brake fluid type, and
              so on, in an easier and centralized way. With that in mind, we
              developed a mobile application that displays the most important
              vehicle-related information while also providing suggestions for
              trails or trips that are ideal for the owner's vehicle. The app
              was developed in React.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <img src={banco} alt="banco"></img>
            <h2 className="time">2020</h2>
            <h1>Tech Learned - React Native, CSS, MongoDB, UX</h1>
            <p>
              Banco do Brasil faced the challenge of convincing its customers to
              adopt its insurance services. The solution was to use agile
              methodologies, we deeply understood the problem through interviews
              with their customers, noticing that the biggest barrier between
              the customer and the company was the confusing way information was
              conveyed to customers.With this understanding, we developed a BB
              application using leading technologies such as React Native, CSS,
              MongoDB, UX, among others, with the goal of providing the user
              with an easy way to understand what the insurance covers, its
              benefits, advantages, and responsibilities in the service.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <img src={vivo} alt="vivo"></img>
            <h2 className="time">2019</h2>
            <h1>Tech Learned - MQTT / Python</h1>
            <p>
              Vivo presented a challenge to develop a solution for urban or
              rural areas using 3G and 4G technologies with the aim of maturing
              the telecommunications sector. My team created a device using a
              Raspberry Pi Zero, which, when connected to sensors like humidity
              and motion sensors, conducted readings and, through an IoT
              process, sent real-time information via MQTT.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default College;
