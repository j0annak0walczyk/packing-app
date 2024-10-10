// /* eslint-disable react/prop-types */
// import { CreateNewTripForm } from "./trips/CreateNewTripForm";
// import styles from "./AppNavContainer.module.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ChooseTrips from "./trips/ChooseTrips";
// import TripPackingList from "./trips/TripPackingList";
// import Map from "./maps/Map";
// import Weather from "./weather/Weather";
// import LoginForm from "./login/LoginForm";
// import Homepage from "./components/Homepage";

// function HomepageContainer() {
//   return (
//     <BrowserRouter>
//       <div className={styles.container}>
//         <Homepage />
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/choose-trip" element={<ChooseTrips />} />
//           <Route path="/choose-trip/new-trip" element={<CreateNewTripForm />} />
//           <Route path="/new-trip" element={<CreateNewTripForm />} />
//           <Route path="/:id" element={<TripPackingList />} />
//           <Route path="/weather" element={<Weather />} />
//           <Route path="map" element={<Map />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default HomepageContainer;
