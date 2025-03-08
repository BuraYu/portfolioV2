import React from "react";
import { useState } from "react";
import "./modal.css";
import Modal from "react-modal";
import techBook from "../images/techbook_screenshot.png";
import techBookPreview from "../images//techbook_img.jpg";

const ModalPreview = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    console.log("Close button clicked");
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#root");

  return (
    <div className="div6-content" onClick={openModal}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
      >
        <div
          className="modal-container"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
        >
          <div className="img-container">
            <img src={techBookPreview} alt="Image of the techbook website" />
          </div>
          <div className="modal-description">
            <h2 className="modal-title">TechBook</h2>
            <p>
              TechBook is a platform for sharing and discovering tech-related
              articles and projects.
            </p>
            <p className="tech-stack">
              <strong>Tech Stack:</strong> React, NodeJS, MongoDB
            </p>
            <div className="modal-links">
              <a
                href="https://github.com/BuraYu/techbook"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 GitHub Repository
              </a>
              <a
                href="http://techbook-sigma.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌍 Visit Website
              </a>
            </div>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </Modal>
      <p>TechBook</p>
      <img src={techBook} alt="" />
      <p>Click to learn more</p>
    </div>
  );
};

export default ModalPreview;
