import styles from "./Homepage.module.css";
import PackingListContainer from "./PackingListContainer";

function Homepage({ isLoading, itemsList, setItemsList }) {
  return (
    <div className={styles.homepage}>
      <div className={styles.header}>
        <h1>Packing List App</h1>
        <h2>Pack smart, travel light: Never forget a thing.</h2>
        <PackingListContainer
          isLoading={isLoading}
          itemsList={itemsList}
          setItemsList={setItemsList}
        />
      </div>
      <div>
        <img src="src/assets/homepage_photo.jpg" />
      </div>
    </div>
  );
}

export default Homepage;
