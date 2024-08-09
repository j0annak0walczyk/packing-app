import { useParams, useSearchParams } from "react-router-dom";
import styles from "./TripPackingList.module.css";
import { Loader } from "../ui/Loader";
import { useTripsList } from "../../hooks/useTripsList";
import { calculateTripDuration } from "../../calculations/calculateTripDuration";
import { useItemsTripList } from "../../hooks/useItemsTripList";
import Item from "../items/Item";
import { Button } from "../ui/Button";
import { useState } from "react";
import AddItem from "../items/AddItem";
import { Filter } from "../ui/Filter";

export default function TripPackingList() {
  const {
    data: itemsList,
    isLoading: isLoadingItems,
    // error: errorItems,
    refetch: refetchItemsList,
  } = useItemsTripList();
  const {
    data: tripsList,
    isLoading: isLoadingTrips,
    // error: errorTrips,
  } = useTripsList();
  const [openAddItemForm, setOpenAddItemForm] = useState(false);
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  if (isLoadingItems || isLoadingTrips) {
    return <Loader />;
  }

  if (!itemsList || !tripsList) {
    return <div>Loading data...</div>;
  }

  const tripDetails = tripsList.filter((trip) => trip.id === Number(id));

  if (!tripDetails || tripDetails.length === 0) {
    return <div>Trip not found</div>;
  }

  const duration = calculateTripDuration(
    tripDetails[0]?.dateFrom,
    tripDetails[0]?.dateTo
  ).days;

  function handleOpenAddItemForm() {
    setOpenAddItemForm(true);
  }

  const handleCloseAddItemForm = (isClosed) => {
    setOpenAddItemForm(isClosed);
    refetchItemsList();
  };

  const filterValue = searchParams.get("checked") || "all";

  let filteredPackingList;
  if (filterValue === "all") filteredPackingList = itemsList;
  if (filterValue === "true")
    filteredPackingList = itemsList?.filter((item) => item.checked);
  if (filterValue === "false")
    filteredPackingList = itemsList?.filter((item) => !item.checked);

  return (
    <>
      <div className={styles.detailsContainer}>
        <div>
          <span>Country: {tripDetails[0].country}</span>
          <span>City: {tripDetails[0].city}</span>
        </div>
        <div>
          <span>Date from: {tripDetails[0].dateFrom}</span>
          <span>Date to: {tripDetails[0].dateTo}</span>
        </div>
        <div>
          <span>
            Duration: {duration} {duration === 1 ? "day" : "days"}
          </span>

          <Button version={"positive"} onClickFunction={handleOpenAddItemForm}>
            Add item
          </Button>
          {openAddItemForm && (
            <AddItem
              isOpen={openAddItemForm}
              handleCloseModal={handleCloseAddItemForm}
              tripDetails={tripDetails}
            />
          )}
        </div>
      </div>
      <div className={styles.listContainer}>
        <Filter
          filterField="checked"
          options={[
            { value: "all", label: "All" },
            { value: "true", label: "Checked" },
            { value: "false", label: "Unchecked" },
          ]}
        />
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Item:</th>
              <th>Quantity:</th>
              <th>Note:</th>
            </tr>
          </thead>

          {filteredPackingList.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </table>
      </div>
    </>
  );
}
