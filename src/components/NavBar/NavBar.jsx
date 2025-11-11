import React from 'react'
import './NavBar.css'
import toplogo from "../../assets/chi-logo-short.png"
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const NavBar = () => {
    const navigate = useNavigate();
    const { logout, isAuthenticated } = useAuth();

    const handleLogout = () => {
      logout();
      navigate('/')
    }
  return (
    <header>
      <div className = 'logo-header'>
        <img src={toplogo} alt="logo" className="navbar-img" />
        <h1>Chi Running Club</h1> 
      </div>
    <ul id="navBar">
      
            <NavLink className={'navLink'} to='/'>Home</NavLink>
            <NavLink className={'navLink'} to='/store'>Store</NavLink>

            {isAuthenticated ?
              <>
                <NavLink className={'navLink'} to='/addteam'>Add Team</NavLink>
                <NavLink className={'navLink'} to='/myteams'>My Teams</NavLink>
                <NavLink to='/profile'className='navLink'>Profile</NavLink>
                <span onClick={handleLogout} className="navLink" style={{cursor: 'pointer'}}>Logout</span>
              </>
              :
              <>
              <NavLink style={{marginLeft: "12px"}}className={'navLink'} to='/login'>Login</NavLink>

              <NavLink className={'navLink'} 
                to="/RegisterRunner"
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#d32f2f",  // red
                  color: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                Register
              </NavLink>
              </>
            }
    </ul>
    </header>
  )
}

export default NavBar