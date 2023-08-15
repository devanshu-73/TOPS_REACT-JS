/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

export default function Sidebar() {
    return (
        <div>
            {/* Left side column. contains the logo and sidebar */}
            <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                    {/* Sidebar user panel */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="#"><i className="fa fa-circle text-success" /> Online</a>
                        </div>
                    </div>
                    {/* search form */}
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" /></button>
                            </span>
                        </div>
                    </form>
                    {/* /.search form */}
                    {/* sidebar menu: : style can be found in sidebar.less */}
                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active treeview">
                            <a href="#">
                                <i className="fa fa-dashboard" /> <span>Dashboard</span> <i className="fa fa-angle-left pull-right" />
                            </a>
                            <ul className="treeview-menu">
                                <li className="active"><a href="index.html"><i className="fa fa-circle-o" /> Dashboard v1</a></li>
                                <li><a href="index2.html"><i className="fa fa-circle-o" /> Dashboard v2</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-edit" /> <span>Forms</span>
                                <i className="fa fa-angle-left pull-right" />
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="pages/forms/general.html"><i className="fa fa-circle-o" /> General Elements</a></li>
                                <li><a href="pages/forms/advanced.html"><i className="fa fa-circle-o" /> Advanced Elements</a></li>
                                <li><a href="pages/forms/editors.html"><i className="fa fa-circle-o" /> Editors</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-table" /> <span>Tables</span>
                                <i className="fa fa-angle-left pull-right" />
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o" /> Simple tables</a></li>
                                <li><a href="pages/tables/data.html"><i className="fa fa-circle-o" /> Data tables</a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
                {/* /.sidebar */}
            </aside>
        </div>

    )
}
