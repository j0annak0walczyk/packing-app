/* eslint-disable react/prop-types */
import { useState } from "react";
import { useAddItem } from "../../hooks/useAddItem";
import ModalComponent from "../ui/ModalComponent";
import { Button } from "../ui/Button";
// import { useItemsList } from "../hooks/useItemsList";
import styles from "./AddItem.module.css";

function AddItem({ isOpen, handleCloseModal, tripDetails }) {
  const { city, country, dateFrom, dateTo, id: tripId } = tripDetails[0];
  const { addNewItem } = useAddItem();
  // const { data: itemsList, refetch: refetchItemsList } = useItemsList();

  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [note, setNote] = useState("");

  const clearForm = function () {
    setItem("");
    setNote("");
    setQuantity("");
  };

  const postNewItem = function (e) {
    e.preventDefault();

    // function generateNewId() {
    //   function sortNum(a, b) {
    //     return a - b;
    //   }

    //   let sortedIdsFromItemsList = itemsList
    //     .map((item) => item.id)
    //     .sort(sortNum);

    //   let newID = 1;
    //   if (sortedIdsFromItemsList[0] > newID) {
    //     newID = 1;
    //   } else if (sortedIdsFromItemsList[0] === newID) {
    //     let comparedIdFromItemsList = 1;
    //     for (let i = 0; comparedIdFromItemsList <= newID; i++) {
    //       newID++;
    //       comparedIdFromItemsList = sortedIdsFromItemsList[i + 1];
    //     }
    //   }
    //   return newID;
    // }

    if (!item) return;

    if (!item || !quantity) alert("Fill in all required fields");
    if (
      quantity &&
      (quantity.includes(",") ||
        quantity.includes(".") ||
        quantity.includes("-") ||
        quantity.includes("e"))
    )
      alert("Quantity has to be a positive integer");

    if (
      item &&
      quantity &&
      !quantity.includes(",") &&
      !quantity.includes(".") &&
      !quantity.includes("-") &&
      !quantity.includes("e")
    ) {
      const newItem = {
        checked: false,
        item: item,
        quantity: quantity,
        note: note,
        trip: tripId,
      };

      addNewItem({ ...newItem });

      clearForm();
    }
  };

  return (
    <ModalComponent isOpen={isOpen} handleCloseModal={handleCloseModal}>
      <div className={styles.formContainer}>
        <div className={styles.tripDetailsContainer}>
          <div>
            <span className={styles.tripDetailsTop}>
              <p>Country:</p> <p>{country}</p>
            </span>
            <span>
              <p>City:</p> <p>{city}</p>
            </span>
          </div>
          <div>
            <span className={styles.tripDetailsTop}>
              <p>Date from:</p> <p>{dateFrom}</p>
            </span>
            <span>
              <p>Date to:</p>
              <p>{dateTo}</p>
            </span>
          </div>
        </div>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <textarea
            placeholder="Additional note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <Button onClickFunction={postNewItem} style={{ margin: "1rem" }}>
            Add item
          </Button>
        </form>
      </div>
    </ModalComponent>
  );
}

export default AddItem;
