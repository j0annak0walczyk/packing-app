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
          <Link to="choose-trip">
            <Button active={"/choose-trip" === currentFilter} version={"nav"}>
              Choose trip
            </Button>
          </Link>
        </li>
        <li>
          <Link to="new-trip">
            <Button
              active={
                "/new-trip" === currentFilter ||
                "/choose-trip/new-trip" === currentFilter
              }
              version={"nav"}
            >
              Create new trip
            </Button>
          </Link>
        </li>

        <li>
          <Link to="/map">
            <Button active={"/map" === currentFilter} version={"nav"}>
              Search on the map
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/weather">
            <Button active={"/weather" === currentFilter} version={"nav"}>
              Check weather
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
