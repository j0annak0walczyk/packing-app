/* eslint-disable react/prop-types */
import Select from "react-select";
import { useTripsList } from "../../hooks/useTripsList";

function AddItemsToOtherTrip({ setSelectedTrip }) {
  const { data: trips } = useTripsList();

  const options = trips.map((trip) => ({
    value: trip.id,
    label: (
      <>
        <p>
          {trip.country}, {trip.city} from {trip.dateFrom} to {trip.dateTo}
        </p>
      </>
    ),
  }));

  const handleChange = (selectedOption) => {
    setSelectedTrip(selectedOption);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "#fff",
      borderColor: "#9e9e9e",
      minHeight: "20px",
      height: "1.8rem",
      width: "15rem",
      boxShadow: "none",
    }),
    valueContainer: (provided) => ({
      ...provided,

      fontSize: "10px",
    }),
    input: (provided) => ({
      ...provided,
      margin: "0px",
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "12px",
      lineHeight: "20px",
    }),
    singleValue: (provided) => ({
      ...provided,
      lineHeight: "30px",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: "0",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      fontSize: "12px",
      marginTop: "0",
      color: "#6C6C6C",
    }),
  };

  return (
    <Select
      options={options}
      placeholder="Select other trip"
      styles={customStyles}
      onChange={handleChange}
    />
  );
}

export default AddItemsToOtherTrip;
