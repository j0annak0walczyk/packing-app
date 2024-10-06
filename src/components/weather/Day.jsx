/* eslint-disable react/prop-types */
import styles from "./Day.module.css";

function Day({ date, max, min, code, isToday }) {
  function getWeatherIcon(wmoCode) {
    const icons = new Map([
      [[0], "☀️"],
      [[1], "🌤"],
      [[2], "⛅️"],
      [[3], "☁️"],
      [[45, 48], "🌫"],
      [[51, 56, 61, 66, 80], "🌦"],
      [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
      [[71, 73, 75, 77, 85, 86], "🌨"],
      [[95], "🌩"],
      [[96, 99], "⛈"],
    ]);
    const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
    if (!arr) return "NOT FOUND";
    return icons.get(arr);
  }

  function formatDay(dateStr) {
    return new Intl.DateTimeFormat("en", {
      weekday: "short",
    }).format(new Date(dateStr));
  }

  return (
    <li className={styles.dayContainer}>
      <p className={styles.icons}>{getWeatherIcon(code)}</p>
      <p> {isToday ? "Today" : `${formatDay(date)}`}</p>
      <p>
        {Math.floor(min)}&deg; &mdash; {Math.ceil(max)}&deg;
      </p>
    </li>
  );
}

export default Day;
