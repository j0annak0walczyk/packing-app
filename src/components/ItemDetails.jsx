import { useParams } from "react-router-dom";
import styles from "./ItemDetails.module.css";

export const ItemDetails = ({ itemsList }) => {
  const { id } = useParams();
  const renderItemDetails = function () {
    if (itemsList.length === 0) return;
    const choseItem = itemsList.filter((item) => item.id === id)[0];
    console.log(choseItem);
    const itemDetails = (
      <>
        <span>Country: {choseItem.country}</span>
        <span>City: {choseItem.cityName}</span>
        <span>Item: {choseItem.item}</span>
        <span>Note: {choseItem.note}</span>
      </>
    );
    return itemDetails;
  };

  return <div className={styles.detailsContainer}>{renderItemDetails()}</div>;
};
