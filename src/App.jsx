import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Estilos from './pages/Styles/Estilos'
import Home from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/styles" element={<Estilos />} />
            <Route path="*" element={<Navigate to="/" />} />

          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
