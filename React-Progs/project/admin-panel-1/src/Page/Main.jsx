/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Content() {
  return (
    <div>
      {/* /. NAV SIDE  */}
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h2>Admin Dashboard</h2>
              <h5>Welcome Jhon Deo , Love to see you back.</h5>
            </div>
          </div>
          {/* /. ROW  */}
          <hr />
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-red set-icon">
                  <i className="fa fa-envelope-o" />
                </span>
                <div className="text-box">
                  <p className="main-text">120 New</p>
                  <p className="text-muted">Messages</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-green set-icon">
                  <i className="fa fa-bars" />
                </span>
                <div className="text-box">
                  <p className="main-text">30 Tasks</p>
                  <p className="text-muted">Remaining</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-blue set-icon">
                  <i className="fa fa-bell-o" />
                </span>
                <div className="text-box">
                  <p className="main-text">240 New</p>
                  <p className="text-muted">Notifications</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-brown set-icon">
                  <i className="fa fa-rocket" />
                </span>
                <div className="text-box">
                  <p className="main-text">3 Orders</p>
                  <p className="text-muted">Pending</p>
                </div>
              </div>
            </div>
          </div>
          {/* /. ROW  */}
          <hr />
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-blue">
                  <i className="fa fa-warning" />
                </span>
                <div className="text-box">
                  <p className="main-text">52 Important Issues to Fix</p>
                  <p className="text-muted">
                    Please fix these issues to work smooth
                  </p>
                  <p className="text-muted">Time Left: 30 mins</p>
                  <hr />
                  <p className="text-muted">
                    <span className="text-muted color-bottom-txt"><i className="fa fa-edit" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      gthn. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit gthn.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="panel back-dash">
                <i className="fa fa-dashboard fa-3x" /><strong> &nbsp; SPEED</strong>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing sit ametsit
                  amet elit ftr. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="panel">
                <div className="main-temp-back">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-xs-6">
                        <i className="fa fa-cloud fa-3x" /> Newyork City
                      </div>
                      <div className="col-xs-6">
                        <div className="text-temp">10°</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-green set-icon">
                  <i className="fa fa-desktop" />
                </span>
                <div className="text-box">
                  <p className="main-text">Display</p>
                  <p className="text-muted">Looking Good</p>
                </div>
              </div>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-heading">Bar Chart Example</div>
                <div className="panel-body">
                  <div id="morris-bar-chart">
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="panel panel-primary text-center no-boder bg-color-green">
                <div className="panel-body">
                  <i className="fa fa-bar-chart-o fa-5x" />
                  <h3>120 GB</h3>
                </div>
                <div className="panel-footer back-footer-green">
                  Disk Space Available
                </div>
              </div>
              <div className="panel panel-primary text-center no-boder bg-color-red">
                <div className="panel-body">
                  <i className="fa fa-edit fa-5x" />
                  <h3>20,000</h3>
                </div>
                <div className="panel-footer back-footer-red">Articles Pending</div>
              </div>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="panel panel-primary text-center no-boder bg-color-green">
                <div className="panel-body">
                  <i className="fa fa-comments-o fa-5x" />
                  <h4>200 New Comments</h4>
                  <h4>See All Comments</h4>
                </div>
                <div className="panel-footer back-footer-green">
                  <i className="fa fa-rocket fa-5x" />
                  Lorem ipsum dolor sit amet sit sit, consectetur adipiscing
                  elitsit sit gthn ipsum dolor sit amet ipsum dolor sit amet
                </div>
              </div>
            </div>
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-heading">Responsive Table Example</div>
                <div className="panel-body">
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
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>100090</td>
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
                          <td>the Bird</td>
                          <td>@twitter</td>
                          <td>100090</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>100090</td>
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
                          <td>the Bird</td>
                          <td>@twitter</td>
                          <td>100090</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="chat-panel panel panel-default chat-boder chat-panel-head">
                <div className="panel-heading">
                  <i className="fa fa-comments fa-fw" />
                  Chat Box
                  <div className="btn-group pull-right">
                    <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                      <i className="fa fa-chevron-down" />
                    </button>
                    <ul className="dropdown-menu slidedown">
                      <li>
                        <a href="#">
                          <i className="fa fa-refresh fa-fw" />Refresh
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check-circle fa-fw" />Available
                        </a>
                      </li>
                      <li>
                        <a href="#"> <i className="fa fa-times fa-fw" />Busy </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o fa-fw" />Away
                        </a>
                      </li>
                      <li className="divider" />
                      <li>
                        <a href="#">
                          <i className="fa fa-sign-out fa-fw" />Sign Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="panel-body">
                  <ul className="chat-box">
                    <li className="left clearfix">
                      <span className="chat-img pull-left">
                        <img src="assets/img/1.png" alt="User" className="img-circle" />
                      </span>
                      <div className="chat-body">
                        <strong>Jack Sparrow</strong>
                        <small className="pull-right text-muted">
                          <i className="fa fa-clock-o fa-fw" />12 mins ago
                        </small>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Curabitur bibendum ornare dolor, quis
                          ullamcorper ligula sodales.
                        </p>
                      </div>
                    </li>
                    <li className="right clearfix">
                      <span className="chat-img pull-right">
                        <img src="assets/img/2.png" alt="User" className="img-circle" />
                      </span>
                      <div className="chat-body clearfix">
                        <small className="text-muted">
                          <i className="fa fa-clock-o fa-fw" />13 mins ago</small>
                        <strong className="pull-right">Jhonson Deed</strong>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Curabitur bibendum ornare dolor, quis
                          ullamcorper ligula sodales.
                        </p>
                      </div>
                    </li>
                    <li className="left clearfix">
                      <span className="chat-img pull-left">
                        <img src="assets/img/3.png" alt="User" className="img-circle" />
                      </span>
                      <div className="chat-body clearfix">
                        <strong>Jack Sparrow</strong>
                        <small className="pull-right text-muted">
                          <i className="fa fa-clock-o fa-fw" />14 mins ago</small>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Curabitur bibendum ornare dolor, quis
                          ullamcorper ligula sodales.
                        </p>
                      </div>
                    </li>
                    <li className="right clearfix">
                      <span className="chat-img pull-right">
                        <img src="assets/img/4.png" alt="User" className="img-circle" />
                      </span>
                      <div className="chat-body clearfix">
                        <small className="text-muted">
                          <i className="fa fa-clock-o fa-fw" />15 mins ago</small>
                        <strong className="pull-right">Jhonson Deed</strong>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Curabitur bibendum ornare dolor, quis
                          ullamcorper ligula sodales.
                        </p>
                      </div>
                    </li>
                    <li className="left clearfix">
                      <span className="chat-img pull-left">
                        <img src="assets/img/1.png" alt="User" className="img-circle" />
                      </span>
                      <div className="chat-body">
                        <strong>Jack Sparrow</strong>
                        <small className="pull-right text-muted">
                          <i className="fa fa-clock-o fa-fw" />12 mins ago
                        </small>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Curabitur bibendum ornare dolor, quis
                          ullamcorper ligula sodales.
                        </p>
                      </div>
                    </li>
                    <li className="right clearfix">
                      <span className="chat-img pull-right">
                        <img src="assets/img/2.png" alt="User" className="img-circle" />
                      </span>
                      <div className="chat-body clearfix">
                        <small className="text-muted">
                          <i className="fa fa-clock-o fa-fw" />13 mins ago</small>
                        <strong className="pull-right">Jhonson Deed</strong>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Curabitur bibendum ornare dolor, quis
                          ullamcorper ligula sodales.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="panel-footer">
                  <div className="input-group">
                    <input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your message to send..." />
                    <span className="input-group-btn">
                      <button className="btn btn-warning btn-sm" id="btn-chat">
                        Send
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-heading">Label Examples</div>
                <div className="panel-body">
                  <span className="label label-default">Default</span>
                  <span className="label label-primary">Primary</span>
                  <span className="label label-success">Success</span>
                  <span className="label label-info">Info</span>
                  <span className="label label-warning">Warning</span>
                  <span className="label label-danger">Danger</span>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">Donut Chart Example</div>
                <div className="panel-body">
                  <div id="morris-donut-chart" />
                </div>
              </div>
            </div>
          </div>
          {/* /. ROW  */}
        </div>
        {/* /. PAGE INNER  */}
      </div>
    </div>

  )
}
