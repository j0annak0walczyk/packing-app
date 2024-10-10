import { useState } from "react";
import { Button } from "../ui/Button";
import { Loader } from "../ui/Loader";
import WeatherData from "./WeatherData";
import styles from "./Weather.module.css";

function Weather() {
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [displayLoacation, setDisplayLocation] = useState("");
  const [weather, setWeather] = useState("");

  function handleLocation(e) {
    setLocation(e.target.value);
  }

  async function fetchWeather() {
    try {
      setIsLoading(true);
      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);

      setDisplayLocation(`${name} ${convertToFlag(country_code)}`);

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      setWeather(weatherData.daily);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function convertToFlag(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  return (
    <div className={styles.weatherContainer}>
      <h3>Check weather for the upcoming weekend</h3>
      <div>
        <input
          type="text"
          placeholder="Search from location..."
          value={location}
          onChange={handleLocation}
        />
      </div>
      <Button version={"positive"} onClickFunction={fetchWeather}>
        Get weather
      </Button>
      {isLoading && <Loader />}
      {weather.weathercode && (
        <WeatherData weather={weather} location={displayLoacation} />
      )}
    </div>
  );
}

export default Weather;
