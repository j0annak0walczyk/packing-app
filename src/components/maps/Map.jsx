import { useRef, useEffect, useState, useCallback } from "react";
import styles from "./Map.module.css";
import { Button } from "../ui/Button";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PopupContent from "./PopupContent";
import { createRoot } from "react-dom/client";

function Map() {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [userCoords, setUserCoords] = useState(null);
  const [shareLocation, setShareLocation] = useState(null);

  // Handle map click to place marker and fetch data
  const handleMapClick = useCallback((mapEvent) => {
    const { lat, lng } = mapEvent.latlng;
    if (markerRef.current) {
      mapRef.current.removeLayer(markerRef.current);
    }

    const popupContentNode = document.createElement("div");
    popupContentNode.classList.add(styles.popupContentDiv);
    const root = createRoot(popupContentNode);

    root.render(<PopupContent popupCoords={[lat, lng]} />);

    markerRef.current = L.marker({ lat, lng })
      .addTo(mapRef.current)
      .bindPopup(
        L.popup({
          // maxWidth: 45,
          // minWidth: 10,
          // minHeight: 200,
          // maxHeight: 200,
        })
      )
      .setPopupContent(popupContentNode)
      .openPopup();
  }, []);

  useEffect(() => {
    if (userCoords === null) return;

    if (!mapRef.current) {
      // Inicjalizacja mapy tylko raz
      mapRef.current = L.map("map").setView(userCoords, shareLocation ? 13 : 3);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      mapRef.current.on("click", handleMapClick);
    } else {
      // Jeśli mapa już istnieje, aktualizujemy jej widok
      mapRef.current.setView(userCoords, shareLocation ? 13 : 3);
    }
  }, [userCoords, shareLocation, handleMapClick]);

  function getPosition() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      setUserCoords([latitude, longitude]);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  function loadMap(shareLocationAgreement) {
    setShareLocation(shareLocationAgreement);

    if (shareLocationAgreement) {
      getPosition();
    } else {
      setUserCoords([51.3858788, 21.1565182]);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttonsContainer}>
        <Button style={{ width: "100%" }} onClickFunction={() => loadMap(true)}>
          I agree to share my location
        </Button>
        <Button
          style={{ width: "100%" }}
          onClickFunction={() => loadMap(false)}
        >
          I do not agree to share my location
        </Button>
      </div>
      <div id="map" style={{ height: "500px", width: "100%" }}></div>
    </div>
  );
}

export default Map;