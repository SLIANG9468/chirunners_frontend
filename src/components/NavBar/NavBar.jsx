import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import toplogo from "../../assets/chi-logo-short.png"

const NavBar = () => {
  return (
    <header>
      <div className = 'logo-header'>
        <img src={toplogo} alt="logo" className="navbar-img" />
        <h1>Chi Running Club</h1> 
      </div>
    <ul id="navBar">
      
            <NavLink className={'navLink'} to='/'>Home</NavLink>

            <NavLink className={'navLink'} to='/chimarathon'>Chicago Marathon</NavLink>

            <NavLink className={'navLink'} to='/races'>Races</NavLink>

            <NavLink className={'navLink'} to='/store'>Store</NavLink>

            <NavLink className={'navLink'} to='/volunteers'>Volunteers</NavLink>

            <NavLink style={{marginLeft: "12px"}}className={'navLink'} to='/login'>Login</NavLink>
             {/* Red button that behaves like a NavLink */}
            <NavLink className={'navLink'} 
              to="/join"
              style={{
                padding: "6px 12px",
                backgroundColor: "#d32f2f",  // red
                color: "white",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Join Now
            </NavLink>
    </ul>
    </header>
  )
}

export default NavBar