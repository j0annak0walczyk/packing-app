/* eslint-disable react/prop-types */
import { CreateNewTripForm } from "./trips/CreateNewTripForm";
import styles from "./AppNavContainer.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppNav } from "./AppNav";
import ChooseTrips from "./trips/ChooseTrips";
import TripPackingList from "./trips/TripPackingList";
import Map from "./maps/Map";
import Weather from "./weather/Weather";

function AppNavContainer() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <AppNav />
        <Routes>
          <Route path="/" element={<ChooseTrips />} />
          <Route path="/choose-trip" element={<ChooseTrips />} />
          <Route path="/choose-trip/new-trip" element={<CreateNewTripForm />} />
          <Route path="/new-trip" element={<CreateNewTripForm />} />
          <Route path="/:id" element={<TripPackingList />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="map" element={<Map />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppNavContainer;
