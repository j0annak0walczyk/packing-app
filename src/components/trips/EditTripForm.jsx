/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../ui/Button";
import styles from "./EditTripForm.module.css";
import ModalComponent from "../ui/ModalComponent";
import useUpdateTrip from "../../hooks/useUpdateTrip";

export const EditTripForm = ({ isOpen, handleCloseModal, trip }) => {
  const [country, setCountry] = useState(trip.country);
  const [city, setCity] = useState(trip.city);
  const [dateFrom, setDateFrom] = useState(trip.dateFrom);
  const [dateTo, setDateTo] = useState(trip.dateTo);
  const { updateTrip } = useUpdateTrip();

  const saveChanges = function (e) {
    e.preventDefault();

    if (dateFrom > dateTo) {
      alert("End date cannot be greater than start date");
    }

    if (country && city && dateFrom && dateTo && dateFrom <= dateTo) {
      const editedTrip = [
        [trip.id, "id", trip.id],
        [trip.id, "city", city],
        [trip.id, "country", country],
        [trip.id, "dateFrom", dateFrom],
        [trip.id, "dateTo", dateTo],
      ];
      editedTrip.map((column) => updateTrip(column));
      handleCloseModal();
    } else if (!country || !city || !dateFrom || !dateTo) {
      alert("Fill in all fields");
    }
  };

  return (
    <ModalComponent isOpen={isOpen} handleCloseModal={handleCloseModal}>
      <form className={styles.formContainer}>
        <div className={styles.form}>
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
            type="date"
            placeholder="dateFrom"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
          <input
            type="date"
            placeholder="dateTo"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
          />
        </div>
        <Button onClickFunction={saveChanges} version={"positive"}>
          Save changes
        </Button>
      </form>
    </ModalComponent>
  );
};
