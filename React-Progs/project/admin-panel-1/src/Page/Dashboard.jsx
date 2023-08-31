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
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <div id="reviews" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <div className="col-md-10 col-md-offset-1">
                                                    <h4><i className="fa fa-quote-left" />Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit onec molestie non sem vel condimentum. <i className="fa fa-quote-right" /></h4>
                                                    <div className="user-img pull-right">
                                                        <img src="assets/img/user.gif" alt className="img-u image-responsive" />
                                                    </div>
                                                    <h5 className="pull-right"><strong className="c-black">Lorem Dolor</strong></h5>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="col-md-10 col-md-offset-1">
                                                    <h4><i className="fa fa-quote-left" />Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit onec molestie non sem vel condimentum. <i className="fa fa-quote-right" /></h4>
                                                    <div className="user-img pull-right">
                                                        <img src="assets/img/user.png" alt className="img-u image-responsive" />
                                                    </div>
                                                    <h5 className="pull-right"><strong className="c-black">Lorem Dolor</strong></h5>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="col-md-10 col-md-offset-1">
                                                    <h4><i className="fa fa-quote-left" />Lorem ipsum dolor sit amet, consectetur adipiscing  Lorem ipsum dolor sit amet, consectetur adipiscing elit onec molestie non sem vel condimentum. <i className="fa fa-quote-right" /></h4>
                                                    <div className="user-img pull-right">
                                                        <img src="assets/img/user.gif" alt className="img-u image-responsive" />
                                                    </div>
                                                    <h5 className="pull-right"><strong className="c-black">Lorem Dolor</strong></h5>
                                                </div>
                                            </div>
                                        </div>
                                        {/*INDICATORS*/}
                                        <ol className="carousel-indicators">
                                            <li data-target="#reviews" data-slide-to={0} className="active" />
                                            <li data-target="#reviews" data-slide-to={1} />
                                            <li data-target="#reviews" data-slide-to={2} />
                                        </ol>
                                        {/*PREVIUS-NEXT BUTTONS*/}
                                    </div>
                                </div>
                            </div>
                            {/* /. ROW  */}
                            <hr />
                            <div className="panel panel-default">
                                <div id="carousel-example" className="carousel slide" data-ride="carousel" style={{ border: '5px solid #000' }}>
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src="assets/img/slideshow/1.jpg" alt />
                                        </div>
                                        <div className="item">
                                            <img src="assets/img/slideshow/2.jpg" alt />
                                        </div>
                                        <div className="item">
                                            <img src="assets/img/slideshow/3.jpg" alt />
                                        </div>
                                    </div>
                                    {/*INDICATORS*/}
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel-example" data-slide-to={0} className="active" />
                                        <li data-target="#carousel-example" data-slide-to={1} />
                                        <li data-target="#carousel-example" data-slide-to={2} />
                                    </ol>
                                    {/*PREVIUS-NEXT BUTTONS*/}
                                    <a className="left carousel-control" href="#carousel-example" data-slide="prev">
                                        <span className="glyphicon glyphicon-chevron-left" />
                                    </a>
                                    <a className="right carousel-control" href="#carousel-example" data-slide="next">
                                        <span className="glyphicon glyphicon-chevron-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* /.REVIEWS &  SLIDESHOW  */}
                        <div className="col-md-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Recent Chat History
                                </div>
                                <div className="panel-body" style={{ padding: 0 }}>
                                    <div className="chat-widget-main">
                                        <div className="chat-widget-left">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                        <div className="chat-widget-name-left">
                                            <h4>Amanna Seiar</h4>
                                        </div>
                                        <div className="chat-widget-right">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                        <div className="chat-widget-name-right">
                                            <h4>Donim Cruseia </h4>
                                        </div>
                                        <div className="chat-widget-left">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                        <div className="chat-widget-name-left">
                                            <h4>Amanna Seiar</h4>
                                        </div>
                                        <div className="chat-widget-right">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                        <div className="chat-widget-name-right">
                                            <h4>Donim Cruseia </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-footer">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Enter Message" />
                                        <span className="input-group-btn">
                                            <button className="btn btn-success" type="button">SEND</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*/.Chat Panel End*/}
                    </div>
                    {/*/.Row*/}
                    <hr />
                    <div className="row">
                        <div className="col-md-8">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                            <th>User No.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><span className="label label-danger">Mark</span></td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td><span className="label label-info">100090</span></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>100090</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry</td>
                                            <td><span className="label label-danger">the Bird</span> </td>
                                            <td>@twitter</td>
                                            <td>100090</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><span className="label label-success">Mark</span></td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td><span className="label label-info">100090</span></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Larry</td>
                                            <td><span className="label label-primary">the Bird</span></td>
                                            <td>@twitter</td>
                                            <td>100090</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td><span className="label label-warning">Jacob</span></td>
                                            <td><span className="label label-success">Thornton</span></td>
                                            <td>@fat</td>
                                            <td><span className="label label-danger">100090</span></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Larry</td>
                                            <td><span className="label label-primary">the Bird</span></td>
                                            <td>@twitter</td>
                                            <td>100090</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td><span className="label label-warning">Jacob</span></td>
                                            <td><span className="label label-success">Thornton</span></td>
                                            <td>@fat</td>
                                            <td><span className="label label-danger">100090</span></td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td><span className="label label-success">Mark</span></td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td><span className="label label-info">100090</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="panel panel-success">
                                <div className="panel-heading">
                                    Recent Comments Example
                                </div>
                                <div className="panel-body">
                                    <ul className="media-list">
                                        <li className="media">
                                            <div className="media-body">
                                                <div className="media">
                                                    <a className="pull-left" href="#">
                                                        <img className="media-object img-circle img-comments" src="assets/img/user.png" />
                                                    </a>
                                                    <div className="media-body">
                                                        <h4 className="media-heading">Nulla gravida vitae</h4>
                                                        Donec sit amet ligula enim. Duis vel condimentum massa.
                                                        {/* Nested media object */}
                                                        <div className="media">
                                                            <a className="pull-left" href="#">
                                                                <img className="media-object img-circle img-comments" src="assets/img/user.gif" />
                                                            </a>
                                                            <div className="media-body">
                                                                <h4 className="media-heading">Amet ligula enim</h4>
                                                                Donec sit amet ligula enim .
                                                            </div>
                                                        </div>
                                                        <div className="media">
                                                            <a className="pull-left" href="#">
                                                                <img className="media-object img-circle img-comments" src="assets/img/user.png" />
                                                            </a>
                                                            <div className="media-body">
                                                                <h4 className="media-heading">Donec t ligula enim</h4>
                                                                Donec sit amet  amet ligula enim .
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/.Row*/}
                    <hr />
                    <div className="row" style={{ paddingBottom: 100 }}>
                        <div className="col-md-6">
                            <div id="comments-sec">
                                <h4><strong>Compose Support Ticket </strong></h4>
                                <hr />
                                <div className="form-group  ">
                                    <label>Please Write a Subject Line</label>
                                    <input type="text" className="form-control" required="required" placeholder="Enter Subject Of Ticket" />
                                </div>
                                <div className="form-group ">
                                    <label>Please Enter Issue</label>
                                    <textarea className="form-control" rows={8} defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success">Compose &amp; Send Ticket</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="panel panel-back noti-box">
                                <span className="icon-box bg-color-black">
                                    <i className="fa fa-bicycle" />
                                </span>
                                <div className="text-box">
                                    <p className="main-text">52 Important Issues to Fix </p>
                                    <p>Please fix these issues to work smooth</p>
                                    <p>Time Left: 30 mins</p>
                                    <hr />
                                    <p>
                                        <span className=" color-bottom-txt"><i className="fa fa-edit" />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn.
                                        </span>
                                    </p>
                                    <hr />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn.
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/.ROW*/}
                </div>
                {/* /. PAGE INNER  */}
            </div>
        </div>

    )
}

export default Dashboard