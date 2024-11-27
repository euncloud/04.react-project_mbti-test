import React from 'react'
import Header from '../pages/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        {/* <footer>footer</footer> */}
    </>
  )
}

export default Layout