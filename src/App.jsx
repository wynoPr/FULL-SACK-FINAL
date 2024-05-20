import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Estilos from './pages/Styles/Estilos'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import History from './pages/History/History'

function App() {

  const [count, setCount] = useState(0)

  const path = window.location.pathname;
  console.log(path);

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<div className='master of-n'><Home /></div>} />
            <Route path="/history" element={<div className='master'><History/></div>} />
            <Route path="/profile" element={<div className='master'><Profile /></div>} />
            <Route path="/styles" element={<Estilos />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
