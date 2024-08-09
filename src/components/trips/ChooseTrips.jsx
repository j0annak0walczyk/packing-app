/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import { useTripsList } from "../../hooks/useTripsList";
import { Loader } from "../ui/Loader";
import { ChooseTrip } from "./ChooseTrip";
import styles from "./ChooseTrips.module.css";
import ChooseTripsBar from "./ChooseTripsBar";
import { calculateTripDuration } from "../../calculations/calculateTripDuration";

function ChooseTrips({ isLoading }) {
  const { data: tripsList } = useTripsList();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Loader />;

  // FILTER

  const filterValue = searchParams.get("duration") || "all";

  let filteredTrips;
  if (filterValue === "all") filteredTrips = tripsList;
  if (filterValue === "daytrips")
    filteredTrips = tripsList?.filter(
      (trip) => calculateTripDuration(trip.dateFrom, trip.dateTo).days === 1
    );
  if (filterValue === "2-7days")
    filteredTrips = tripsList?.filter(
      (trip) =>
        calculateTripDuration(trip.dateFrom, trip.dateTo).days > 1 &&
        calculateTripDuration(trip.dateFrom, trip.dateTo).days < 8
    );
  if (filterValue === "8-14days")
    filteredTrips = tripsList?.filter(
      (trip) =>
        calculateTripDuration(trip.dateFrom, trip.dateTo).days > 7 &&
        calculateTripDuration(trip.dateFrom, trip.dateTo).days < 15
    );
  if (filterValue === "morethan14days")
    filteredTrips = tripsList?.filter(
      (trip) => calculateTripDuration(trip.dateFrom, trip.dateTo).days >= 15
    );

  // SORT

  const sortBy = searchParams.get("sortBy") || "country-asc";
  const [field, direction] = sortBy.split("-");

  const modifier = direction === "asc" ? 1 : -1;

  let sortedTrips;
  let var1;
  let var2;
  sortedTrips = filteredTrips?.sort((a, b) => {
    if (field === "city" || field === "country") {
      var1 = a[field].toString().toLowerCase();
      var2 = b[field].toString().toLowerCase();
    } else if (field === "duration") {
      var1 = calculateTripDuration(a.dateFrom, a.dateTo).days;
      var2 = calculateTripDuration(b.dateFrom, b.dateTo).days;
    } else if (field === "createDate") {
      var1 = new Date(a.createDate);
      var2 = new Date(b.createDate);
    }
    if (var1 < var2) {
      return -1 * modifier;
    }
    if (var1 > var2) {
      return 1 * modifier;
    }
    return 0;
  });

  return (
    <div>
      <ChooseTripsBar />
      <div>Trips on page: {filteredTrips?.length}</div>
      <table>
        <thead>
          <tr>
            <th>Country:</th>

            <th>City:</th>

            <th>Date from:</th>

            <th>Date to:</th>

            <th>Duration:</th>
          </tr>
        </thead>
        <tbody>
          {sortedTrips?.map((trip) => (
            <ChooseTrip className={styles.list} key={trip.id} trip={trip} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChooseTrips;
