import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import techBook from "../images/techbook_screenshot.png";

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
          className="test"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
        ></div>
      </Modal>
      <p>TechBook</p>
      <img src={techBook} alt="" />
      <p>Click to learn more</p>
    </div>
  );
};

export default ModalPreview;
