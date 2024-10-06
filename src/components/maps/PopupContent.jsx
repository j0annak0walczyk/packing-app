import { useEffect, useState } from "react";
import { CreateNewTripForm } from "../trips/CreateNewTripForm";
import { Button } from "../ui/Button";
import ModalComponent from "../ui/ModalComponent";
import { QueryClient, QueryClientProvider } from "react-query";
import styles from "./PopupContent.module.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1,
    },
  },
});

/* eslint-disable react/prop-types */
function PopupContent({ popupCoords }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openNewTripForm, setOpenNewTripForm] = useState(false);
  const [isOpenModalFromChild, setIsOpenModalFromChild] = useState(null);

  function handleOpenNewTripForm() {
    setOpenNewTripForm(true);
  }

  const handleCloseNewTripForm = (isClosed) => {
    setOpenNewTripForm(isClosed);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://us1.locationiq.com/v1/reverse.php?key=pk.3567ce2840f7e67bc1ca213a81c6301e&lat=${popupCoords[0]}&lon=${popupCoords[1]}&format=json`
          // `https://us1.locationiq.com/v1/reverse?key=pk.3567ce2840f7e67bc1ca213a81c6301e&lat=40.7128&lon=-74.0060&format=json`
          // `https://nominatim.openstreetmap.org/reverse?format=json&lat=${popupCoords[0]}&lon=${popupCoords[1]}`
        );

        if (!response.ok) {
          throw new Error("Błąd w odpowiedzi serwera");
        }

        const result = await response.json();

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.container}>
        <p>
          Country:{" "}
          {loading ? "Loading..." : data?.address?.country || "Unknown"}
        </p>
        <p>City: {loading ? "Loading..." : data?.address?.city || "Unknown"}</p>
        <p>
          <Button
            style={{ width: "6rem", height: "1.7rem" }}
            onClickFunction={handleOpenNewTripForm}
          >
            Add new trip
          </Button>
          {openNewTripForm && (
            <ModalComponent
              isOpen={
                isOpenModalFromChild !== null
                  ? isOpenModalFromChild
                  : openNewTripForm
              }
              handleCloseModal={handleCloseNewTripForm}
            >
              <CreateNewTripForm
                countryData={data?.address?.country || "Unknown"}
                cityData={data?.address?.city || "Unknown"}
                setIsOpenModalFromChild={setIsOpenModalFromChild}
                style={"formPopup"}
              />
            </ModalComponent>
          )}
        </p>
      </div>
    </QueryClientProvider>
  );
}

export default PopupContent;
