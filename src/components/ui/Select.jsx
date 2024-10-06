/* eslint-disable react/prop-types */
import styles from "./Select.module.css";

function Select({ options, onChange, value, version }) {
  return (
    <select value={value} onChange={onChange} className={`${styles[version]}`}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
