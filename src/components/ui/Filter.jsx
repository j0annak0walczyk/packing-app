/* eslint-disable react/prop-types */
import { Button } from "./Button";
import styles from "./Filter.module.css";
import { useSearchParams } from "react-router-dom";

export const Filter = ({ filterField, options, refetch = () => {} }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    refetch();
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.container}>
      <p>Filter by:</p>
      <ul className={styles.filterList}>
        {options?.map((option, index) => (
          <li className={styles[`item${index + 1}`]} key={option.value}>
            <Button
              active={option.value === currentFilter}
              isDisabled={option.value === currentFilter}
              onClickFunction={() => handleClick(option.value)}
              version={"filter"}
            >
              {option.label}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
