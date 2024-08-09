/* eslint-disable react/prop-types */
import styles from "./Homepage.module.css";
import AppNavContainer from "./AppNavContainer";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.header}>
        <h1>Packing List App</h1>
        <h2>Pack smart, travel light: Never forget a thing.</h2>
        <AppNavContainer />
      </div>
      <div>
        <img src="src/assets/homepage_photo.jpg" />
      </div>
    </div>
  );
}

export default Homepage;
