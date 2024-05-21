import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Estilos from './pages/Styles/Estilos'

import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import History from './pages/History/History'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import EmerContact from './pages/EmerContact/EmerContact'

export const GlobalContext = React.createContext();




function App() {

  const [count, setCount] = useState(0)

  const path = window.location.pathname;
  console.log(path);

  const [lastP, setLastP] = useState();

  return (
    <>
      <GlobalContext.Provider value={{ lastP, setLastP }}>
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<div className='master of-n'><Home /></div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/history" element={<div className='master'><History/></div>} />
            <Route path="/profile" element={<div className='master'><Profile /></div>} />
            <Route path="/emergency-contact" element={<EmerContact />} />

            <Route path="/styles" element={<Estilos />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider> 
    </>
  )
}

export default App
