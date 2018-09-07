import React from "react";
import Modal from "react-responsive-modal";

const Popup = props => {
  const { header, state, onCloseModal, onDeleteClick, onClose } = props;

  return (
    <Modal open={state} onClose={onClose} center>
      <h2 style={{ fontSize: "1.5rem" }}>{header}</h2>
      <button className="btn-small red darken-1" onClick={onDeleteClick}>
        DA
      </button>
      <button
        className="btn-small orange lighten-1"
        style={{ marginLeft: ".5rem" }}
        onClick={onCloseModal}
      >
        NE
      </button>
    </Modal>
  );
};

export default Popup;
