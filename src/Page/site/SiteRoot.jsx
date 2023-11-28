import React from 'react'
import Header from '../../Layout/header/Header'
import { Outlet } from 'react-router'
import Footer from '../../Layout/footer/Footer'

function SiteRoot() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default SiteRoot
