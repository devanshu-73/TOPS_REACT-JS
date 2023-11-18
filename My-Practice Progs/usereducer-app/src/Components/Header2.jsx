import React from 'react'
import { NavLink } from 'react-router-dom';

const Header2 = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                <div className="collapse navbar-collapse justify-content-evenly" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">
                        <NavLink className="nav-item nav-link" to="/" ><h1>Post</h1></NavLink>
                        <NavLink className="nav-item nav-link" to="/manage" ><h1>Manage</h1></NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header2
