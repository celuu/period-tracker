import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeSigninModal } from "../../store/ui";
import LoginForm from "./LoginForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "400px",
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

const LoginModal = () => {
  const signinModalOpen = useSelector((store) => store.ui.signinModalOpen);
  const dispatch = useDispatch();
  return (
    <Modal
      isOpen={signinModalOpen}
      onRequestClose={() => dispatch(closeSigninModal())}
      style={customStyles}
      contentLabel="Sign In Modal"
      overlayClassName="Overlay"
      closeTimeoutMS={200}
    >
      <button
        onClick={() => dispatch(closeSigninModal())}
        className="modal-close-button"
      >
        &times;
      </button>
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
