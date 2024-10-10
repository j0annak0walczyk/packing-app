import { Link, useLocation } from "react-router-dom";
import styles from "./AppNav.module.css";
import { Button } from "./ui/Button";
import { useState } from "react";
import { useEffect } from "react";

export const AppNav = () => {
  const location = useLocation();
  const [currentFilter, setCurrentFilter] = useState(location.pathname);

  useEffect(() => {
    setCurrentFilter(location.pathname);
  }, [location]);

  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link to="/app/choose-trip">
            <Button
              active={"/app/choose-trip" === currentFilter}
              version={"nav"}
            >
              Choose trip
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/app/new-trip">
            <Button
              active={
                "/app/new-trip" === currentFilter ||
                "/app/choose-trip/new-trip" === currentFilter
              }
              version={"nav"}
            >
              Create new trip
            </Button>
          </Link>
        </li>

        <li>
          <Link to="/app/map">
            <Button active={"/app/map" === currentFilter} version={"nav"}>
              Search on the map
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/app/weather">
            <Button
              // onClickFunction={handleNavButtons}
              active={"/app/weather" === currentFilter}
              version={"nav"}
            >
              Check weather
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
