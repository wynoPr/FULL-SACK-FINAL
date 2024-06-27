import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Estilos from "./pages/Styles/Estilos";

import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import History from "./pages/History/History";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import EmerContact from "./pages/EmerContact/EmerContact";
import ScannerPage from "./pages/ScannerPage/ScannerPage";
import ItemPage from "./pages/Item/ItemPage";
import OnBoarding from "./pages/OnBoarding/OnBoarding";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import EditProfile from "./components/EditProfile/EditProfile";
import Loading from "./components/Loading/Loading";

export const GlobalContext = React.createContext();

function App() {
  const [count, setCount] = useState(0);

  const [lastP, setLastP] = useState();

  useEffect(() => {
    console.log(lastP);
  }, [lastP]);

  return (
    <>
      <GlobalContext.Provider value={{ lastP, setLastP }}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<OnBoarding />} />
            <Route path="/register" element={<Register />} />
            {!localStorage.getItem("authToken") ? (
              <Route path="*" element={<Navigate to="/login" />} />
            ) : (
              <>
                <Route
                  path="/"
                  element={
                    <div className="master of-n">
                      <Loading />
                      <Home />
                    </div>
                  }
                />
                <Route
                  path="/history"
                  element={
                    <div className="master">
                      <History />
                    </div>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <div className="master">
                      <Profile />
                    </div>
                  }
                />
                <Route
                  path="/editprofile"
                  element={
                    <PrivateRoute>
                      <div className="master">
                        <EditProfile />
                      </div>
                    </PrivateRoute>
                  }
                />
                <Route path="/emergency-contact" element={<EmerContact />} />
                <Route path="/scanner" element={<ScannerPage />} />
                <Route path="/item/:code" element={<ItemPage />} />

                <Route path="/styles" element={<Estilos />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
