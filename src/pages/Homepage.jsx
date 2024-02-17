import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.header}>
        <h1>Packing List App</h1>
        <h2>Pack smart, travel light: Never forget a thing.</h2>

        <Link to="/listApp">
          <button>Click here to create your packing list</button>
        </Link>
      </div>
      <div>
        <img src="src/assets/homepage_photo.jpg" />
      </div>
    </div>
  );
}

export default Homepage;
