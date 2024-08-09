import { useState } from "react";
import { Button } from "../ui/Button";
import { useUpdateItem } from "../../hooks/useUpdateItem";
import useDeleteItem from "../../hooks/useDeleteItem";
import { HiOutlineTrash } from "react-icons/hi2";
import { useAddItem } from "../../hooks/useAddItem";
import { useItemsList } from "../../hooks/useItemsList";
import AddItemsToOtherTrip from "../trips/AddItemsToOtherTrip";
import styles from "./Item.module.css";

/* eslint-disable react/prop-types */
function Item({ item }) {
  const itemDetails = item;
  const [checkedStatus, setCheckedStatus] = useState(itemDetails.checked);
  const [selectedTrip, setSelectedTrip] = useState("");
  const { updateItem } = useUpdateItem();
  const { deleteItem, isDeletingItem } = useDeleteItem();
  const { addNewItem } = useAddItem();
  const { data: itemsList } = useItemsList();

  function handleUpdateChecked() {
    setCheckedStatus(!checkedStatus);
    updateItem({
      id: itemDetails.id,
      updateColumn: "checked",
      updateValue: !checkedStatus,
    });
  }

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

  function handleDeleteItem() {
    deleteItem(itemDetails.id);
  }

  return (
    <tbody>
      <tr>
        <td>
          <input
            type="checkbox"
            checked={checkedStatus}
            onChange={handleUpdateChecked}
          />
        </td>
        <td>{itemDetails.item}</td>
        <td>{itemDetails.quantity}</td>
        <td>{itemDetails.note}</td>
        <td>
          <div className={styles.add} version={"positive"}>
            <AddItemsToOtherTrip setSelectedTrip={setSelectedTrip} />
            <Button
              onClickFunction={handleAddItemToOtherList}
              style={{ width: "10rem", height: "1.5rem", marginLeft: "0px" }}
            >
              Add to other packing list
            </Button>
          </div>
        </td>
        <td>
          <Button
            version={"negative"}
            isDisabled={isDeletingItem}
            onClickFunction={handleDeleteItem}
            style={{ fontSize: "28px" }}
          >
            <HiOutlineTrash />
          </Button>
        </td>
      </tr>
    </tbody>
  );
}

export default Item;
