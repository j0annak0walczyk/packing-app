import { ItemForm } from "../components/ItemForm";
import PackedItemsList from "../components/PackedItemsList";
import styles from "./ListApp.module.css";

function ListApp() {
  return (
    <div className={styles.container}>
      <div>
        Nawigacja
        <PackedItemsList />
        <ItemForm />
      </div>
      <div>Mapa</div>
    </div>
  );
}

export default ListApp;
