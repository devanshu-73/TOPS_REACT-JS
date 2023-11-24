import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
      <div className="collapse navbar-collapse justify-content-evenly" id="navbarCollapse">
        <div className="navbar-nav mr-auto py-0">
          <NavLink className="nav-item nav-link" to="/"><h1>User Page</h1></NavLink>
          <NavLink className="nav-item nav-link" to="/manageuser"><h1>Manage User Data</h1></NavLink>
        </div>
      </div>
    </nav>
  
  )
}

export default Header
