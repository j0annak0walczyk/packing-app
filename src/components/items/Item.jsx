import { useState } from "react";
import { Button } from "../ui/Button";
import { useUpdateItem } from "../../hooks/useUpdateItem";
import { HiEllipsisVertical } from "react-icons/hi2";
import styles from "./Item.module.css";
import ModalComponent from "../ui/ModalComponent";
import ItemActionBar from "./ItemActionBar";
import useDeleteItem from "../../hooks/useDeleteItem";

/* eslint-disable react/prop-types */
function Item({ item }) {
  const itemDetails = item;
  const [checkedStatus, setCheckedStatus] = useState(itemDetails.checked);
  const { updateItem } = useUpdateItem();
  const [openItemActionBar, setOpenItemActionBar] = useState(false);
  const { deleteItem } = useDeleteItem();

  function handleUpdateChecked() {
    setCheckedStatus(!checkedStatus);
    const editedItem = [itemDetails.id, "checked", !checkedStatus];
    updateItem(editedItem);
  }

  function handleOpenItemActionBar() {
    setOpenItemActionBar(true);
  }

  const handleCloseItemActionBar = (isClosed) => {
    setOpenItemActionBar(isClosed);
  };

  function handleDeleteItem() {
    deleteItem(itemDetails.id);
  }

  return (
    <tr>
      <td className={styles.cell}>
        <input
          type="checkbox"
          checked={checkedStatus}
          onChange={handleUpdateChecked}
        />
      </td>
      <td className={styles.cell}>{itemDetails.item}</td>
      <td className={styles.cell}>{itemDetails.quantity}</td>
      <td className={styles.cell}>{itemDetails.note}</td>
      <td>
        <Button
          version={"gray"}
          onClickFunction={handleOpenItemActionBar}
          style={{
            width: "2rem",
            height: "2rem",
          }}
        >
          <HiEllipsisVertical />
        </Button>
        {openItemActionBar && (
          <ModalComponent
            isOpen={openItemActionBar}
            handleCloseModal={handleCloseItemActionBar}
            otherButtonOnClickFunction={handleDeleteItem}
          >
            <ItemActionBar
              itemDetails={item}
              handleCloseModal={handleCloseItemActionBar}
            />
          </ModalComponent>
        )}
      </td>
    </tr>
  );
}

export default Item;
