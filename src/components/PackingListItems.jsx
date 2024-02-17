import { FilterBar } from "./FilterBar";
import { Loader } from "./Loader";
import { PackingListItem } from "./PackingListItem";
import styles from "./PackingListItems.module.css";
function PackingListItems({ isLoading, itemsList }) {
  if (isLoading) return <Loader />;
  return (
    <div>
      <FilterBar />
      <table>
        <thead>
          <tr>
            <th>Country:</th>
            <th>City:</th>
            <th>Item:</th>
          </tr>
        </thead>
        <tbody className={styles.list}>
          <PackingListItem itemsList={itemsList} />
        </tbody>
      </table>
    </div>
  );
}

export default PackingListItems;
