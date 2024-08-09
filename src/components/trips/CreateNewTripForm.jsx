import { useState } from "react";
import { Button } from "../ui/Button";
import styles from "./CreateNewTripForm.module.css";
import { useCreateTrip } from "../../hooks/useCreateTrip";

export const CreateNewTripForm = () => {
  const { createTrip, isCreatingTrip } = useCreateTrip();

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const clearForm = function () {
    setCountry("");
    setCity("");
    setDateFrom("");
    setDateTo("");
  };

  const createNewTrip = function (e) {
    e.preventDefault();

    const createDate = new Date();

    if (dateFrom > dateTo) {
      alert("End date cannot be greater than start date");
    }

    if (
      country &&
      city &&
      dateFrom &&
      dateTo &&
      createDate &&
      dateFrom <= dateTo
    ) {
      const newTrip = {
        // id: generateNewId(),
        createDate: createDate,
        city: city,
        country: country,
        dateFrom: dateFrom,
        dateTo: dateTo,
      };

      createTrip(newTrip);
      clearForm();
    } else if (!country || !city || !dateFrom || !dateTo) {
      alert("Fill in all fields");
    }
  };

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
          type="date"
          placeholder="Item"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
        />
        <input
          type="date"
          placeholder="Quantity"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
        />
        <Button onClickFunction={createNewTrip} isdisabled={isCreatingTrip}>
          Create trip
        </Button>
      </form>
    </div>
  );
};
