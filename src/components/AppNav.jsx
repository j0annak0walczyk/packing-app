import { Link } from "react-router-dom";
import styles from "./AppNav.module.css";
import { Button } from "./ui/Button";

export const AppNav = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link to="choose-trip">
            <Button>Choose trip</Button>
          </Link>
        </li>
        <li>
          <Link to="new-trip">
            <Button>Create new trip</Button>
          </Link>
        </li>
        <li>
          <Link to="/weather">
            <Button>Check weather</Button>
          </Link>
        </li>
        <li>
          <Link to="/map">
            <Button>Search on the map</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
