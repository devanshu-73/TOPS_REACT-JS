/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Dashboard() {
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">DASHBOARD</h1>
                            <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-4">
                            <div className="main-box mb-red">
                                <a href="#">
                                    <i className="fa fa-bolt fa-5x" />
                                    <h5>Zero Issues</h5>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="main-box mb-dull">
                                <a href="#">
                                    <i className="fa fa-plug fa-5x" />
                                    <h5>40 Task In Check</h5>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="main-box mb-pink">
                                <a href="#">
                                    <i className="fa fa-dollar fa-5x" />
                                    <h5>200K Pending</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard