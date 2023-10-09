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
          <h2>Hello AWS Modal </h2>
          <hr></hr>
          <p>Aqui vai o conteudo do modal da aws</p>
          <button onClick={closeAwsModal}>close page</button>
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
          <h2>Hello BAYER Modal </h2>
          <hr></hr>
          <p>kjdhshfkjsdhkfjhdsjk BAYER</p>
          <button onClick={closeBayerModal}>close page</button>
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
          <h2>Hello TIVIT Modal </h2>
          <hr></hr>
          <p>kjdhshfkjsdhkfjhdsjk TIVIT</p>
          <button onClick={closeTivitModal}>close page</button>
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
          <h2>Hello SAUDE Modal </h2>
          <hr></hr>
          <p>kjdhshfkjsdhkfjhdsjk SAUDE</p>
          <button onClick={closeSaudeModal}>close page</button>
        </Modal>
      </div>
    </section>
  );
};
export default Work;
