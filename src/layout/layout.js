import React from 'react'
import MainHeader from '../components/header/mainHeader'
import Footer from '../components/footer/footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <MainHeader/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout
