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

import Header from "./components/Header/Header";
import IstTime from "./components/IstTime/IstTime";

export const GlobalContext = React.createContext();

// const apiUrl = process.env.API_URL;

function App() {
  const [count, setCount] = useState(0);
  const [refresh, setRefresh] = useState(0);

  const [lastP, setLastP] = useState();

  useEffect(() => {
    console.log(lastP);
  }, [lastP]);

  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const [istT, setIstT] = useState(localStorage.getItem('istTime'));

  // useEffect(() => {
  //   const handleStorageChange = (event) => {
  //     console.log('Storage event detected:', event);
  //     if (event.key === 'authToken') {
  //       setToken(localStorage.getItem('authToken'))
  //     }else if (event.key === 'istTime') {
  //       setIstT(localStorage.getItem('istTime'))
  //     }

  //   };
  //   window.addEventListener('storage', handleStorageChange);
  //   console.log('Storage event listener added.');

  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //     console.log('Storage event listener removed.');
  //   };
  // }, []);

  useEffect(() => {
    setToken(localStorage.getItem('authToken'))
    setIstT(localStorage.getItem('istTime'))
  
    
  }, [refresh])
  

  return (
    <>
    
      <GlobalContext.Provider value={{ lastP, setLastP, refresh, setRefresh }}>
        <BrowserRouter>

            <Header />
            {(!istT) && <IstTime/>}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<OnBoarding />} />
            <Route path="/register" element={<Register />} />


            {(!token) ? <Route path="*" element={<Navigate to="/login" />} /> 
            :
            (<>
            <Route path="/" element={<div className='master of-n'><Home /></div>} />
            <Route path="/history" element={<div className='master'><History/></div>} />
            <Route path="/profile" element={<div className='master'><Profile /></div>} />
            <Route path="/editprofile" element={<PrivateRoute><div className='master'><EditProfile /></div></PrivateRoute>} />
            <Route path="/emergency-contact" element={<EmerContact />} />
            <Route path="/scanner" element={<ScannerPage />} />
            <Route path="/item/:code" element={<ItemPage />} />

            <Route path="/styles" element={<Estilos />} />
            <Route path="*" element={<Navigate to="/" />} />
            </>)}

          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
