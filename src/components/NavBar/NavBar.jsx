import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
    <h1>Chirunners</h1>
    <div id="navBar">
      
            <NavLink className={'navLink'} to='/'>HOME</NavLink>

            <NavLink style={{marginLeft: "12px"}}className={'navLink'} to='/login'>LOGIN</NavLink>

       
    </div>
    <hr style={{width: "90%", margin: '0 auto', backgroundColor: 'black', border: 'none', height: '2px'}}/>
    </>
  )
}

export default NavBar