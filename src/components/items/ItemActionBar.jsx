/* eslint-disable react/prop-types */
import { useState } from "react";
import { useItemsList } from "../../hooks/useItemsList";
import AddItemsToOtherTrip from "../trips/AddItemsToOtherTrip";
import styles from "./ItemActionBar.module.css";
import { Button } from "../ui/Button";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { useAddItem } from "../../hooks/useAddItem";
import { useUpdateItem } from "../../hooks/useUpdateItem";
import { Tooltip as ReactTooltip } from "react-tooltip";

function ItemActionBar({ itemDetails, handleCloseModal }) {
  const [selectedTrip, setSelectedTrip] = useState("");
  const [item, setItem] = useState(itemDetails.item);
  const [quantity, setQuantity] = useState(itemDetails.quantity);
  const [note, setNote] = useState(itemDetails.note);
  const { addNewItem } = useAddItem();
  const { data: itemsList } = useItemsList();
  const { updateItem } = useUpdateItem();

  function handleAddItemToOtherList() {
    itemsList.map((item) => {
      if (itemDetails.id === item.id)
        addNewItem({
          checked: false,
          item: itemDetails.item,
          quantity: itemDetails.quantity,
          note: itemDetails.note,
          trip: selectedTrip.value,
        });
    });
  }

  const saveChanges = function (e) {
    e.preventDefault();

    if (!item || !quantity) alert("Fill in all required fields");
    if (
      quantity &&
      (String(quantity).includes(",") ||
        String(quantity).includes(".") ||
        String(quantity).includes("-") ||
        String(quantity).includes("e"))
    )
      alert("Quantity has to be a positive integer");

    if (
      item &&
      quantity &&
      !String(quantity).includes(",") &&
      !String(quantity).includes(".") &&
      !String(quantity).includes("-") &&
      !String(quantity).includes("e")
    ) {
      const editedItem = [
        [itemDetails.id, "checked", itemDetails.checked],
        [itemDetails.id, "item", item],
        [itemDetails.id, "quantity", quantity],
        [itemDetails.id, "note", note],
      ];
      editedItem.map((column) => updateItem(column));
      handleCloseModal(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.itemDetailsContainer}>
        <form className={styles.form}>
          <input
            data-tooltip-id="input"
            data-tooltip-content="Item"
            type="text"
            placeholder="Item*"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className={styles.inputName}
          />
          <input
            data-tooltip-id="input"
            data-tooltip-content="Quantity"
            type="number"
            placeholder="Quantity*"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className={styles.inputQuantity}
          />
          <textarea
            data-tooltip-id="input"
            data-tooltip-content="Note (optional)"
            type="text"
            placeholder="Note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className={styles.inputNote}
          />
          <ReactTooltip id="input" className={styles.tooltipForm} place="top" />
          <Button onClickFunction={saveChanges} className={styles.buttonForm}>
            Save changes
          </Button>
        </form>
      </div>
      <div className={styles.itemAddToOtherTripContainer}>
        <div className={styles.add} version={"positive"}>
          <p>
            You can add {quantity > 1 ? "these items" : "this item"} to other
            trip
          </p>
          <div className={styles.selectLine}>
            <AddItemsToOtherTrip setSelectedTrip={setSelectedTrip} />

            <div>
              <div>
                <HiOutlineInformationCircle
                  data-tooltip-id="trip-sort-info"
                  data-tooltip-content='Same sorting applies as on "Choose trip" page'
                />
              </div>
              <ReactTooltip
                id="trip-sort-info"
                className={styles.tooltip}
                place="top"
              />
            </div>
          </div>
          <Button
            onClickFunction={handleAddItemToOtherList}
            style={{
              width: "10rem",
              height: "1.5rem",
              marginLeft: "0px",
              padding: "0.1rem",
            }}
            version={"positive"}
          >
            Add items to other trip
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ItemActionBar;
