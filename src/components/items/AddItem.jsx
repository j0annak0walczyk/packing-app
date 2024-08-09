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

    if (item && quantity) {
      const newItem = {
        checked: false,
        item: item,
        quantity: quantity,
        note: note,
        trip: tripId,
      };

      addNewItem({ ...newItem });

      clearForm();
    } else {
      alert("Fill in all required fields");
    }
  };

  return (
    <ModalComponent isOpen={isOpen} handleCloseModal={handleCloseModal}>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <span>{country}</span>
          <span>{city}</span>
          <span>
            from {dateFrom} to {dateTo}
          </span>
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
          <Button onClickFunction={postNewItem}>Add item</Button>
        </form>
      </div>
    </ModalComponent>
  );
}

export default AddItem;
