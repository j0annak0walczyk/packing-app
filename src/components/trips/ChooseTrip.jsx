/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { calculateTripDuration } from "../../calculations/calculateTripDuration";
import { Button } from "../ui/Button";
import styles from "./ChooseTrip.module.css";
import { HiOutlineTrash } from "react-icons/hi";
import useDeleteTrip from "../../hooks/useDeleteTrip";
import AddItemsToOtherTrip from "./AddItemsToOtherTrip";
import { useAddItem } from "../../hooks/useAddItem";
import { useItemsList } from "../../hooks/useItemsList";
import { useState } from "react";
import { EditTripForm } from "./EditTripForm";
import useDeleteItem from "../../hooks/useDeleteItem";

export const ChooseTrip = ({ trip }) => {
  const { deleteTrip, isDeletingTrip } = useDeleteTrip();
  const { addNewItem } = useAddItem();
  const { data: itemsList, refetch: refetchItemsList } = useItemsList();
  const { deleteItem } = useDeleteItem();
  const [selectedTrip, setSelectedTrip] = useState("");
  const tripDuration = calculateTripDuration(trip.dateFrom, trip.dateTo);
  const [openEditTripForm, setOpenEditTripForm] = useState(false);

  async function handleDeleteTrip() {
    async function deletingItems() {
      try {
        const deletePromises = itemsList
          .filter((item) => item.trip === trip.id)
          .map((item) => deleteItem(item.id));

        await Promise.all(deletePromises);
      } catch (error) {
        console.error("Error deleting items:", error);
        throw error;
      }
    }

    try {
      await deletingItems();
      await refetchItemsList();
      deleteTrip(trip.id);
    } catch (error) {
      console.error("Error handling delete trip:", error);
    }
  }

  function handleAddListToOtherList() {
    itemsList.map((item) => {
      if (item.trip === trip.id)
        addNewItem({
          checked: false,
          item: item.item,
          quantity: item.quantity,
          note: item.note,
          trip: selectedTrip.value,
        });
    });
  }

  function handleOpenEditTripForm() {
    setOpenEditTripForm(true);
  }

  const handleCloseEditTripForm = (isClosed) => {
    setOpenEditTripForm(isClosed);
  };

  return (
    <>
      <tr>
        <td className={styles.cell}>{trip.country}</td>
        <td className={styles.cell}>{trip.city}</td>
        <td className={styles.cell}>{trip.dateFrom}</td>
        <td className={styles.cell}>{trip.dateTo}</td>
        <td className={styles.cell}>{tripDuration.days}</td>
        <td>
          <Button version={"gray"} onClickFunction={handleOpenEditTripForm}>
            Edit trip
          </Button>
          {openEditTripForm && (
            <EditTripForm
              isOpen={openEditTripForm}
              handleCloseModal={handleCloseEditTripForm}
              trip={trip}
            />
          )}
        </td>
        <td>
          <Link to={`/${trip.id}`}>
            <Button version={"information"}>See packing list</Button>
          </Link>
        </td>
        <td>
          <Button
            version={"negative"}
            style={{ fontSize: "28px" }}
            onClickFunction={handleDeleteTrip}
            isDisabled={isDeletingTrip}
          >
            <HiOutlineTrash />
          </Button>
        </td>
        <td>
          <div className={styles.add} version={"positive"}>
            <AddItemsToOtherTrip setSelectedTrip={setSelectedTrip} />
            <Button
              onClickFunction={handleAddListToOtherList}
              style={{ width: "10rem", height: "1.5rem", marginLeft: "0px" }}
            >
              Add to other packing list
            </Button>
          </div>
        </td>
      </tr>
    </>
  );
};
