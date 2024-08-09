/* eslint-disable react/prop-types */

import Modal from "react-modal";
import { Button } from "./Button";

Modal.setAppElement("#root");

const ModalComponent = ({ isOpen, handleCloseModal, children }) => {
  function closeModal() {
    handleCloseModal(false);
  }

  return (
    <Modal isOpen={isOpen}>
      <Button onClickFunction={closeModal}>X</Button>
      {children}
    </Modal>
  );
};

export default ModalComponent;
