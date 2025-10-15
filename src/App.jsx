import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Catalog from './pages/Catalog'
import AnimalInfo from './pages/Details'
import ThankYouPage from './pages/Thanks'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/animals/:id" element={<AnimalInfo />} />
        <Route path="/thanks" element={<ThankYouPage />} />
      </Routes>
    </Router>
  )
}
