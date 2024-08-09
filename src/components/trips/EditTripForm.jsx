/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../ui/Button";
import styles from "./CreateNewTripForm.module.css";
import ModalComponent from "../ui/ModalComponent";
import useUpdateTrip from "../../hooks/useUpdateTrip";

export const EditTripForm = ({ isOpen, handleCloseModal, trip }) => {
  const [country, setCountry] = useState(trip.country);
  const [city, setCity] = useState(trip.city);
  const [dateFrom, setDateFrom] = useState(trip.dateFrom);
  const [dateTo, setDateTo] = useState(trip.dateTo);
  const { updateTrip } = useUpdateTrip();

  const editTrip = function (e) {
    e.preventDefault();

    // function generateNewId() {
    //   const newId = `${country.slice(0, 3)}-${city.slice(
    //     0,
    //     3
    //   )}-${dateFrom.slice(-2)}${dateFrom.slice(5, 7)}`;
    //   return newId;
    // }

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
          <Button onClickFunction={editTrip}>Edit trip</Button>
        </form>
      </div>
    </ModalComponent>
  );
};
