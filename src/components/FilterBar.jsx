import styles from "./FilterBar.module.css";

export const FilterBar = () => {
  return (
    <div>
      Filter by:
      <ul className={styles.filterList}>
        <li>
          Country: <input type="text" />
        </li>
        <li>
          City: <input type="text" />
        </li>
        <li>
          Item: <input type="text" />
        </li>
      </ul>
    </div>
  );
};
