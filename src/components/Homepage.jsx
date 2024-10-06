/* eslint-disable react/prop-types */
import styles from "./Homepage.module.css";
import AppNavContainer from "./AppNavContainer";

function Homepage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.homepage}>
        <div className={styles.header}>
          <h1>Packing App</h1>
          <h2>Pack smart, travel light: Never forget a thing.</h2>
        </div>
        <div>
          <img
            src="src/assets/homepage_photo.jpg"
            alt="An image depicting a packed suitcase for a trip"
          />
        </div>
      </div>

      <AppNavContainer />
    </div>
  );
}

export default Homepage;
