import { useState } from "react";
import { Button } from "./Button";
import styles from "./ItemForm.module.css";

const BASE_URL = "http://localhost:9000";

export const ItemForm = ({ setItemsList, itemsList }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [item, setItem] = useState("");

  const addItemBtn = function (e) {
    e.preventDefault();

    if (!country || !city || !item) return;

    if (country && city && item) {
      // setItemsList((prevState) => [
      //   ...prevState,
      //   {
      //     id: prevState.length + 1,
      //     cityName: city,
      //     country: country,
      //     item: item,
      //   },
      // ]);

      const newItem = {
        id: itemsList.length + 1,
        cityName: city,
        country: country,
        item: item,
      };

      setItemsList((prevState) => [...prevState, newItem]);

      addItem(newItem);
      alert("Item added");
      setCountry("");
      setCity("");
      setItem("");
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
        <Button onClickFunction={addItemBtn}>Add item</Button>
      </form>
    </div>
  );
};
