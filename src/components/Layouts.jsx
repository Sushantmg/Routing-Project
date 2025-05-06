import React from 'react'
import Api from "./Api"
import Header from './Header'
import { Outlet } from 'react-router'


const Layouts = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  )
}
export default Layouts