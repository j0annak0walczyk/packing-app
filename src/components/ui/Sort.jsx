/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import Select from "./Select";
import styles from "./Sort.module.css";

export const Sort = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <div className={styles.container}>
      <p>Sort by:</p>
      <Select
        className={styles.sortList}
        options={options}
        onChange={handleChange}
        value={sortBy}
        version={"select"}
      />
    </div>
  );
};
