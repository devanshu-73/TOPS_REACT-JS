/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-default navbar-cls-top" role="navigation" style={{ marginBottom: 0 }}>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="index.html">Binary admin</a>
                </div>
                <div style={{ color: 'white', padding: '15px 50px 5px 50px', float: 'right', fontSize: 16 }}>
                    Last access : 30 May 2014 &nbsp;
                    <a href="#" className="btn btn-danger square-btn-adjust">Logout</a>
                </div>
            </nav>
            {/* /. NAV TOP  */}
            <nav className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">
                        <li className="text-center">
                            <img src="assets/img/find_user.png" className="user-image img-responsive" />
                        </li>
                        <li>
                            <NavLink className="active-menu" to="/"><i className="fa fa-dashboard fa-3x" /> Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/table"><i className="fa fa-table fa-3x" /> Table Examples</NavLink>
                        </li>
                        <li>
                            <NavLink to="/form"><i className="fa fa-edit fa-3x" /> Forms </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>

    )
}
