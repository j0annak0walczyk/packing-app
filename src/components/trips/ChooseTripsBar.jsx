import { Filter } from "./../ui/Filter";
import { Sort } from "../ui/Sort";
import styles from "./ChooseTripsBar.module.css";

function ChooseTripsBar() {
  return (
    <div className={styles.container}>
      <Sort
        options={[
          { value: "country-asc", label: "Country (A-Z)" },
          { value: "country-desc", label: "Country (Z-A)" },
          { value: "city-asc", label: "City (A-Z)" },
          { value: "city-desc", label: "City (Z-A)" },
          { value: "duration-asc", label: "Duration (shortest)" },
          { value: "duration-desc", label: "Duration (longest)" },
          { value: "createDate-asc", label: "Oldest added" },
          { value: "createDate-desc", label: "Newest added" },
        ]}
      />
      <Filter
        filterField="duration"
        options={[
          { value: "all", label: "All" },
          { value: "daytrips", label: "1 day trips" },
          { value: "2-7days", label: "2-7 day trips" },
          { value: "8-14days", label: "8-14 day trips" },
          { value: "morethan14days", label: "more than 14 day trips" },
        ]}
      />
    </div>
  );
}

export default ChooseTripsBar;
