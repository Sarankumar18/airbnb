import React from 'react'
import logo from "../Images/logo.png"
import "./Main.css"
import "../fonts/Poppins/Poppins-Regular.ttf"
function Navbar() {
  return (
    <nav>
      <img src={logo} className="nav-logo"/> 
    </nav>
  )
}

export default Navbar