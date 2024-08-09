/* eslint-disable react/prop-types */
import Select from "react-select";
import { useTripsList } from "../../hooks/useTripsList";

function AddItemsToOtherTrip({ setSelectedTrip }) {
  const { data: trips } = useTripsList();

  const options = trips.map((trip) => ({
    value: trip.id,
    label: `${trip.country}, ${trip.city}, ${trip.dateFrom}-${trip.dateTo}`,
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
      height: "20px",
      width: "60%",
      boxShadow: "none",
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "20px",
      padding: "0 6px",
    }),
    input: (provided) => ({
      ...provided,
      margin: "0",
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "8px",
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
      marginTop: "0",
      color: "red",
    }),
  };

  return (
    <Select
      options={options}
      placeholder="Select trip"
      styles={customStyles}
      onChange={handleChange}
    />
  );
}

export default AddItemsToOtherTrip;
