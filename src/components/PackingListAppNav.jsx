import { Link } from "react-router-dom";
import styles from "./PackingListAppNav.module.css";
import { Button } from "./Button";

export const PackingListAppNav = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link to="list">
            <Button>Packing list</Button>
          </Link>
        </li>
        <li>
          <Link to="/new-item">
            <Button>Add packing item</Button>
          </Link>
        </li>
        <li>
          <Link to="/wather">
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
