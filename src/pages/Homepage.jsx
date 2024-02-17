import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.header}>
        <h1>Packing List App</h1>
        <h2> Helps you with...</h2>
        <button>Click here to create your packing list</button>
      </div>
      <div>
        <img src="src/assets/homepage_photo.jpg" />
      </div>
    </div>
  );
}

export default Homepage;
