/* eslint-disable react/prop-types */

import Modal from "react-modal";
import { Button } from "./Button";
import styles from "./ModalComponent.module.css";
import { HiMiniXMark, HiOutlineTrash } from "react-icons/hi2";
import { useMediaQuery } from "@mui/material";

Modal.setAppElement("#root");

const ModalComponent = ({
  isOpen,
  handleCloseModal,
  children,
  otherButtonOnClickFunction,
}) => {
  function closeModal() {
    handleCloseModal(false);
  }

  const isMobile = useMediaQuery("(max-width:600px)");

  const customStyles = {
    content: {
      zIndex: 1000,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      minHeight: isMobile ? "30vh" : "50vH",
      minWidth: isMobile ? "45vh" : "40vH",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div className={styles.buttonsContainer}>
        <Button
          onClickFunction={closeModal}
          style={{
            width: "2rem",
            height: "2rem",
            padding: "2px",
          }}
        >
          <HiMiniXMark />
        </Button>
        {otherButtonOnClickFunction && (
          <Button
            version={"negative"}
            onClickFunction={otherButtonOnClickFunction}
            style={{ fontSize: "28px" }}
          >
            <HiOutlineTrash />
          </Button>
        )}
      </div>
      <div className={styles.childrenContainer}>{children}</div>
    </Modal>
  );
};

export default ModalComponent;
