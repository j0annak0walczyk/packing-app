/* eslint-disable react/prop-types */
import { CreateNewTripForm } from "./trips/CreateNewTripForm";
import styles from "./AppNavContainer.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppNav } from "./AppNav";
import ChooseTrips from "./trips/ChooseTrips";
import TripPackingList from "./trips/TripPackingList";

function AppNavContainer() {
  return (
    <div className={styles.container}>
      <div>
        <BrowserRouter>
          <AppNav />
          <Routes>
            <Route path="/" element={<ChooseTrips />} />
            <Route path="/choose-trip" element={<ChooseTrips />} />
            <Route path="/new-trip" element={<CreateNewTripForm />} />
            <Route path="/:id" element={<TripPackingList />} />

            <Route path="map" element={<div>Mapa</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default AppNavContainer;
