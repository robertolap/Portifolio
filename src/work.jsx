import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const Work = () => {
  // Define state variables and functions for each modal
  const [awsModalIsOpen, setAwsModalIsOpen] = useState(false);
  const [bayerModalIsOpen, setBayerModalIsOpen] = useState(false);
  const [tivitModalIsOpen, setTivitModalIsOpen] = useState(false);
  const [saudeModalIsOpen, setSaudeModalIsOpen] = useState(false);

  // Function to open the AWS modal
  function openAwsModal() {
    setAwsModalIsOpen(true);
  }

  // Function to close the AWS modal
  function closeAwsModal() {
    setAwsModalIsOpen(false);
  }

  // Function to open the BAYER modal
  function openBayerModal() {
    setBayerModalIsOpen(true);
  }

  // Function to close the BAYER modal
  function closeBayerModal() {
    setBayerModalIsOpen(false);
  }

  // Function to open the TIVIT modal
  function openTivitModal() {
    setTivitModalIsOpen(true);
  }

  // Function to close the TIVIT modal
  function closeTivitModal() {
    setTivitModalIsOpen(false);
  }

  // Function to open the SAUDE modal
  function openSaudeModal() {
    setSaudeModalIsOpen(true);
  }

  // Function to close the SAUDE modal
  function closeSaudeModal() {
    setSaudeModalIsOpen(false);
  }

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
        <button className="aws" onClick={openAwsModal}></button>
        <Modal
          isOpen={awsModalIsOpen}
          onRequestClose={closeAwsModal}
          contentLabel="AWS Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <h2>
            Internship Migrations and Cloud Economics Latam: Amazon Web Service
          </h2>
          <p>
            I contributed directly and indirectly to
            <span>
              20 Business Cases, 24 Cloud Financial Management (CFM) Capability
              Assessments (CA), and co-led 4 scale initiatives
            </span>
            . Key Business Cases included
            <span>
              Embraer, Serasa Experience, BTG, OI/VTAL, FCA Stellantis,
              Localiza, Ipiranga, Grupo Ultra, and others,
            </span>
            involving a mix of reactive support and proactive coordination of
            migration activities, TCO calculations, and additional pillars of
            the Cloud Value Framework of CE. I enhanced the CFM CA process by
            assessing customer scenarios and providing actionable
            recommendations for cost optimization and FinOps journey. Key
            customers included
            <span>
              Boticário, Nubank, BTG, OLX, Banco Inter, PagSeguro, AME, B3, and
              others.
            </span>
            <span>Business Value: </span>Assisting AWS customers and potential
            customers in shaping their IT technology strategies and IT financial
            models, quantifying the business and technological benefits of the
            cloud.
            <span>Cloud Financial Management or FinOps:</span> Helping customers
            implement cloud adoption governance best practices, increasing the
            business value of the cloud by bringing together technology,
            business, and finance professionals with a new set of cloud
            processes and operational models.
          </p>

          <i class="fa-solid fa-x" onClick={closeAwsModal}></i>
        </Modal>

        <h2 className="bayertitle">
          IT Business Experience <br></br>
          <span>02/2021 – 08/2021</span>
        </h2>
        <button className="bayer" onClick={openBayerModal}></button>
        <Modal
          isOpen={bayerModalIsOpen}
          onRequestClose={closeBayerModal}
          contentLabel="BAYER Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <h2>Internship in IT Sales Department: Bayer</h2>

          <li>
            Building a Data Quality project for the
            <span>
              Grower-Data Lab, Market, and Customer Intelligence sector
            </span>
            with the aim of comparing data quality by assessing the data source
            against its consumption location.
          </li>
          <br />
          <li>Querying relational SQL databases.</li>
          <br />
          <li>Conducting exploratory data analysis using Python.</li>
          <br />
          <li>
            Creating service feedback and improvements in PowerPoint format for
            Bayer's farmer clients.
          </li>
          <br />
          <p>Assisting in budgeting and product sales. </p>

          <i class="fa-solid fa-x" onClick={closeBayerModal}></i>
        </Modal>

        <h2 className="tivittitle">
          Digital Consulting <br></br>
          <span>10/2019 – 12/2020</span>
        </h2>
        <button className="tivit" onClick={openTivitModal}></button>
        <Modal
          isOpen={tivitModalIsOpen}
          onRequestClose={closeTivitModal}
          contentLabel="Tivit Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <h2>Internship in Digital Consulting (Pre-sales): Tivit </h2>
          <li>Assisted in building the company's case studies.</li>
          <br />
          <li>
            Assisted in the preparation of contracts and services with
            third-party IT companies.
          </li>
          <br />
          <li>Aided the sales team in mapping potential future clients.</li>
          <i class="fa-solid fa-x" onClick={closeTivitModal}></i>
        </Modal>

        <h2 className="saudetitle">
          Optical Supervisor<br></br>
          <span>Oct 2013 - May 2019</span>
        </h2>
        <button className="saude" onClick={openSaudeModal}></button>
        <Modal
          isOpen={saudeModalIsOpen}
          onRequestClose={closeSaudeModal}
          contentLabel="SAUDE Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <h2>General Supervisor Optical and Ophthalmology Clinic </h2>
          <li>
            Acrylic lens polisher - Responsible for assembling glasses and
            lenses.
          </li>
          <br />
          <li>
            System computerization/developing the advertising and marketing area
            - Responsible for creating artwork, slogans, videos, among others,
            using tools like Photoshop. Organized files, customer records,
            supplier accounts, employees, among others, using tools such as
            Excel, Access, Word, and PowerPoint.
          </li>
          <br />
          <li>
            Sales team leader - Responsible for leading and guiding a team of 4
            employees in the sales department, with the objectives of achieving
            targets and optimizing sales.
          </li>
          <br />
          <li>
            Financial and administrative department - Responsible for organizing
            purchases of merchandise and equipment for the company, capital
            turnover, and verifying incoming and outgoing values for the
            company.
          </li>
          <i class="fa-solid fa-x" onClick={closeSaudeModal}></i>
        </Modal>
      </div>
    </section>
  );
};
export default Work;
