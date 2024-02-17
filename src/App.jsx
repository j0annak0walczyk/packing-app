import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ListApp from "./pages/ListApp";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/listApp" element={<ListApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
