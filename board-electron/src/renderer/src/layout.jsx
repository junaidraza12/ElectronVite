import React from 'react'
import { Outlet } from 'react-router-dom'
import SideDrawer from './components/Navigation/SideDrawer';
import Navbar from './components/Pages/Header';





export default  function Layout() {
    return (
        <>
        
      
      <SideDrawer/>
      <Outlet/>
     
        </>
    )
}

