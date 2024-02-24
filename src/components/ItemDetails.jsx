import { useParams } from "react-router-dom";
import styles from "./ItemDetails.module.css";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";

const BASE_URL = "http://localhost:9000";

export const ItemDetails = () => {
  const { id } = useParams();
  const [itemData, setItemData] = useState(null);

  useEffect(
    function () {
      async function fetchItemsList() {
        try {
          const res = await fetch(`${BASE_URL}/packed-items/${id}`);
          if (!res.ok) throw new Error();
          const data = await res.json();
          setItemData(data);
        } catch (e) {
          console.log(e);
        }
      }
      fetchItemsList();
    },
    [id]
  );

  if (itemData === null) return <Loader />;

  return (
    <div className={styles.detailsContainer}>
      <span>Country: {itemData.country}</span>
      <span>City: {itemData.cityName}</span>
      <span>Item: {itemData.item}</span>
      <span>Note: {itemData.note}</span>
    </div>
  );
};
