import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import { HomePage } from './HomePage'

export const MainLayout = () => {
  return (
    <React.Fragment>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
    </React.Fragment>
  )
}
