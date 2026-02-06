import React from 'react'
import Navbar from '../components/organisms/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/organisms/Footer'

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
