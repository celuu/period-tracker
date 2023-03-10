import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closePeriodModal } from "../../store/ui";
import PeriodForm from "./PeriodForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "480px",
    width: "400px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#D4CDE9",
    color: "black",
    border: "3px solid black",
  },
};

Modal.setAppElement("#root");

const CreatePeriodModal = () => {
  const periodModalOpen = useSelector((store) => store.ui.periodModalOpen);
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={periodModalOpen}
      onRequestClose={() => dispatch(closePeriodModal())}
      style={customStyles}
      contentLabel="Create Event Modal"
      overlayClassName="Overlay"
      closeTimeoutMS={200}
    >
      <button
        onClick={() => dispatch(closePeriodModal())}
        className="modal-close-button"
      >
        &times;
      </button>
      <PeriodForm />
    </Modal>
  );
};

export default CreatePeriodModal;
