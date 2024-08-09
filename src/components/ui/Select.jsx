/* eslint-disable react/prop-types */
import styles from "./Select.module.css";

function Select({ options, onChange, value }) {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
