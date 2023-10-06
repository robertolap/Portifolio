import React from "react";

const Work = () => {
  return (
    <section className="work" id="professional">
      <div className="titlecont">
        <h1 className="worktitle">Work Experience</h1>
      </div>
      <div className="popup">
        <h2 className="awstitle">
          Migrations and Cloud<br></br> Economics Latam <br></br>
          <span>08/2021 – 08/2023</span>
        </h2>
        <button className="aws" id="openmodal"></button>

        <h2 className="bayertitle">
          IT Businness Experience <br></br>
          <span>02/2021 – 08/2021</span>
        </h2>
        <button className="bayer" id="openmodal"></button>

        <h2 className="tivittitle">
          Digital Consulting <br></br>
          <span>10/2019 – 12/2020</span>
        </h2>
        <button className="tivit" id="openmodal"></button>

        <h2 className="saudetitle">
          Optical Supervisor<br></br>
          <span>Oct 2013 - May 2019</span>
        </h2>
        <button className="saude" id="openmodal"></button>
      </div>
    </section>
  );
};
export default Work;
