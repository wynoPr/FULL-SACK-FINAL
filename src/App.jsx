import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Estilos from "./pages/Styles/Estilos";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import History from "../src/pages/Styles/History/History";
import ScannerPage from "./pages/ScannerPage/ScannerPage";
import ItemPage from "./pages/Item/ItemPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/styles" element={<Estilos />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/scanner" element={<ScannerPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
