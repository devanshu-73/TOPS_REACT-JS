/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{ marginBottom: 0 }}>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <NavLink className="navbar-brand" to="index.html">COMPANY NAME</NavLink>
                </div>
                <div className="header-right">
                    <NavLink to="message-task.html" className="btn btn-info" title="New Message"><b>30 </b><i className="fa fa-envelope-o fa-2x" /></NavLink>
                    <NavLink to="message-task.html" className="btn btn-primary" title="New Task"><b>40 </b><i className="fa fa-bars fa-2x" /></NavLink>
                    <NavLink to="login.html" className="btn btn-danger" title="Logout"><i className="fa fa-exclamation-circle fa-2x" /></NavLink>
                </div>
            </nav>
            {/* /. NAV TOP  */}
            <nav className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">
                        <li>
                            <div className="user-img-div">
                                <img src="assets/img/user.png" className="img-thumbnail" />
                                <div className="inner-text">
                                    Jhon Deo Alex
                                    <br />
                                    <small>Last Login : 2 Weeks Ago </small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <NavLink className="active-menu" to="index.html"><i className="fa fa-dashboard " />Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="#"><i className="fa fa-desktop " />Categories <span className="fa arrow" /></NavLink>
                            <ul className="nav nav-second-level">
                                <li>
                                    <NavLink to="/add_categories"><i className="fa fa-toggle-on" />Add &amp; Categories</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/manage_categories"><i className="fa fa-toggle-on" />Manage &amp; Categories</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="#"><i className="fa fa-desktop " />Products <span className="fa arrow" /></NavLink>
                            <ul className="nav nav-second-level">
                                <li>
                                    <NavLink to="/add_product"><i className="fa fa-toggle-on" />Add &amp; Products</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/manage_product"><i className="fa fa-toggle-on" />Manage &amp; Products</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/manage_order"><i className="fa fa-flash " />Manage Order </NavLink>
                        </li>

                        <li>
                            <NavLink to="/manage_user"><i className="fa fa-flash " />Manage User </NavLink>
                        </li>

                        <li>
                            <NavLink to="/add_blog"><i className="fa fa-flash " />Add Blog </NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>


    )
}

export default Header