import { Link, Outlet } from "react-router-dom";
import { AppNav } from "./AppNav";
import styles from "./AppLayout.module.css";
import { Button } from "./ui/Button";
import IMAGES from "../images/Images";

function AppLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Link to="/" className={styles.logoContainer}>
          <img className={styles.logo} src={IMAGES.logo} alt="Logo" />
        </Link>
        <div className={styles.nav}>
          <AppNav />
        </div>
        <Link to="/" className={styles.logoutContainer}>
          <Button
            style={{
              color: "#0b4b3a",
            }}
          >
            Log out
          </Button>
        </Link>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
