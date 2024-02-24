import { useState } from "react";
import { Button } from "./Button";
import styles from "./ItemForm.module.css";

const BASE_URL = "http://localhost:9000";

export const ItemForm = ({ setItemsList, itemsList }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [item, setItem] = useState("");
  const [note, setNote] = useState("");

  const clearForm = function () {
    setCountry("");
    setCity("");
    setItem("");
    setNote("");
  };

  const postNewItemAndAddItemToState = function (e) {
    e.preventDefault();

    if (!country || !city || !item) return;

    if (country && city && item) {
      const newItem = {
        id: (itemsList.length + 1).toString(),
        cityName: city,
        country: country,
        item: item,
        note: note,
      };

      addItem(newItem);
      clearForm();
    } else {
      alert("Fill in all fields");
    }
  };

  async function addItem(newItem) {
    try {
      const res = await fetch(`${BASE_URL}/packed-items`, {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setItemsList((prevState) => [...prevState, data]);
        alert("Item added");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <textarea
          placeholder="Additional note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <Button onClickFunction={postNewItemAndAddItemToState}>Add item</Button>
      </form>
    </div>
  );
};
