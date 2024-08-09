/* eslint-disable react/prop-types */
import { Button } from "./Button";
import styles from "./Filter.module.css";
import { useSearchParams } from "react-router-dom";

export const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.container}>
      Filter by:
      <ul className={styles.filterList}>
        {options?.map((option) => (
          <li key={option.value} className={styles.filterListElement}>
            <Button
              active={option.value === currentFilter}
              isDisabled={option.value === currentFilter}
              onClickFunction={() => handleClick(option.value)}
            >
              {option.label}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
