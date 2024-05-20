import { useState } from "react";
import {
  BrowserRouter,
  // Navigate,
  Route,
  Routes,
} from "react-router-dom";
// import Estilos from "./pages/Styles/Estilos";
// import Home from "./pages/Styles/Home/Home";
// import Profile from "./pages/Styles/Profile/Profile";
// import History from "./pages/Styles/History/History";
import ScannerPage from "./pages/ScannerPage/ScannerPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/styles" element={<Estilos />} />
          <Route path="*" element={<Navigate to="/" />} /> */}
          <Route path="/scanner" element={<ScannerPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
