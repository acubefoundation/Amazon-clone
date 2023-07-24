import React from 'react'
import A_Header from './A_Header'
import { Outlet } from 'react-router-dom'



function HeaderOutlet() {
  return (
    <div>
         
    <A_Header />
    <Outlet/>
   
    </div>
  )
}

export default HeaderOutlet