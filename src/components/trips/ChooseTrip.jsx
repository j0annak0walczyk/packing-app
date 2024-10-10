/* eslint-disable react/prop-types */
import { calculateTripDuration } from "../../calculations/calculateTripDuration";
import styles from "./ChooseTrip.module.css";
import ModalComponent from "../ui/ModalComponent";
import { useState } from "react";
import { Button } from "../ui/Button";
import { HiEllipsisVertical } from "react-icons/hi2";
import TripActionBar from "./TripActionBar";

export const ChooseTrip = ({ trip }) => {
  const tripDuration = calculateTripDuration(trip.dateFrom, trip.dateTo);
  const [openTripActionBar, setOpenTripActionBar] = useState(false);

  function handleOpenTripActionBar() {
    setOpenTripActionBar(true);
  }

  const handleCloseTripActionBar = (isClosed) => {
    setOpenTripActionBar(isClosed);
  };

  return (
    <tr>
      <td className={styles.cell}>{trip.country}</td>
      <td className={styles.cell}>{trip.city}</td>
      <td className={styles.cell}>{trip.dateFrom}</td>
      <td className={styles.cell}>{trip.dateTo}</td>
      <td className={styles.cell}>{tripDuration.days}</td>
      <td className={styles.buttonCell}>
        <Button
          version={"gray"}
          onClickFunction={handleOpenTripActionBar}
          style={{
            width: "2rem",
            height: "2rem",
          }}
        >
          <HiEllipsisVertical />
        </Button>
        {openTripActionBar && (
          <ModalComponent
            isOpen={openTripActionBar}
            handleCloseModal={handleCloseTripActionBar}
          >
            <TripActionBar trip={trip} />
          </ModalComponent>
        )}
      </td>
    </tr>
  );
};
