import React from "react"
import { Outlet } from "react-router-dom"
import HeaderNavBar from "../../componants/HeaderNavBar"

const Home = () => {
  return (
    <div>
      <HeaderNavBar />
      <Outlet />
    </div>
  )
}

export default Home
