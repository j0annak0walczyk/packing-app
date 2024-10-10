/* eslint-disable react/prop-types */
import styles from "./Loader.module.css";

export const Loader = ({ version = "big" }) => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles[version]}></div>
    </div>
  );
};
