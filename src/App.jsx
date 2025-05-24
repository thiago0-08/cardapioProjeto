import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Telaprincipal from './Components/TelaPrincipal/Telaprincipal'
import ProductDetails from './Components/pages/ProductDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Telaprincipal />
          </>
        } />

        <Route path="/produto/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default App