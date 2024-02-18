import Homepage from "./components/Homepage";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [itemsList, setItemsList] = useState([]);

  useEffect(function () {
    async function fetchItemsList() {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/packed-items`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        setIsLoading(false);
        setItemsList(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchItemsList();
  }, []);

  return (
    <div>
      <Homepage
        isLoading={isLoading}
        itemsList={itemsList}
        setItemsList={setItemsList}
      />
    </div>
  );
};

export default App;
