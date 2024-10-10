/* eslint-disable react/prop-types */
import styles from "./Homepage.module.css";
import { Button } from "./ui/Button";
import { useState } from "react";
import ModalComponent from "./ui/ModalComponent";
import LoginForm from "./login/LoginForm";
import IMAGES from "../images/Images";

function Homepage() {
  const [openLogin, setOpenLogin] = useState(false);

  function handleOpenLogin() {
    setOpenLogin(true);
  }

  const handleCloseLogin = (isClosed) => {
    setOpenLogin(isClosed);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.homepage}>
        <div className={styles.header}>
          <h1>Packing App</h1>
          <h2>Pack smart, travel light: Never forget a thing.</h2>
          <Button version={"positive"} onClickFunction={handleOpenLogin}>
            Log in
          </Button>
          {openLogin && (
            <ModalComponent
              isOpen={openLogin}
              handleCloseModal={handleCloseLogin}
            >
              <LoginForm />
            </ModalComponent>
          )}
        </div>
        <div>
          <img
            src={IMAGES.homepage_photo}
            alt="An image depicting a packed suitcase for a trip"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
