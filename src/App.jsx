import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </Router>
  )
}
