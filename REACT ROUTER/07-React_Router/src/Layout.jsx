import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Headers from './components/Header/Header'
function Layout(){
  return (
    <>
  <Headers/>
  <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout