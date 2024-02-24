import { useParams } from "react-router-dom";
import styles from "./ItemDetails.module.css";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";

const BASE_URL = "http://localhost:9000";

export const ItemDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [chosenItem, setChosenItem] = useState("");

  useEffect(
    function () {
      async function fetchItemsList() {
        setIsLoading(true);
        try {
          const res = await fetch(`${BASE_URL}/packed-items/${id}`);
          if (!res.ok) throw new Error();
          const data = await res.json();
          setIsLoading(false);
          setChosenItem(data);
        } catch (e) {
          console.log(e);
        }
      }
      fetchItemsList();
    },
    [id]
  );

  if (isLoading) return <Loader />;

  return (
    <div className={styles.detailsContainer}>
      <span>Country: {chosenItem.country}</span>
      <span>City: {chosenItem.cityName}</span>
      <span>Item: {chosenItem.item}</span>
      <span>Note: {chosenItem.note}</span>
    </div>
  );
};
