import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Estilos from './pages/Styles/Estilos'

import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import History from './pages/History/History'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'


function App() {

  const [count, setCount] = useState(0)

  const path = window.location.pathname;
  console.log(path);

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<PrivateRoute><div className='master of-n'><Home /></div></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/history" element={<PrivateRoute><div className='master'><History /></div></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><div className='master'><Profile /></div></PrivateRoute>} />

          <Route path="/styles" element={<Estilos />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
