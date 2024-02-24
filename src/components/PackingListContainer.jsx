import { ItemForm } from "./ItemForm";
import PackingListItems from "./PackingListItems";
import styles from "./PackingListContainer.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PackingListAppNav } from "./PackingListAppNav";
import { ItemDetails } from "./ItemDetails";

function PackingListContainer({ isLoading, itemsList, setItemsList }) {
  return (
    <div className={styles.container}>
      <div>
        <BrowserRouter>
          <PackingListAppNav />
          <Routes>
            <Route
              path="/"
              element={
                <PackingListItems isLoading={isLoading} itemsList={itemsList} />
              }
            />
            <Route
              path="list"
              element={
                <PackingListItems isLoading={isLoading} itemsList={itemsList} />
              }
            />
            <Route
              path="new-item"
              element={
                <ItemForm setItemsList={setItemsList} itemsList={itemsList} />
              }
            />
            <Route path="/list/:id" element={<ItemDetails />} />

            <Route path="map" element={<div>Mapa</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default PackingListContainer;
