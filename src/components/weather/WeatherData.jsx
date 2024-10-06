import styles from "./WeatherData.module.css";
import Day from "./Day";

/* eslint-disable react/prop-types */
function WeatherData({ weather, location }) {
  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: dates,
    weathercode: codes,
  } = weather;

  return (
    <div className={styles.container}>
      <h4>Weather {location}</h4>
      <ul className={styles.daysContainer}>
        {dates.map((date, i) => (
          <Day
            key={date}
            date={date}
            max={max.at(i)}
            min={min.at(i)}
            code={codes.at(i)}
            isToday={i === 0}
          />
        ))}
      </ul>
    </div>
  );
}

export default WeatherData;
