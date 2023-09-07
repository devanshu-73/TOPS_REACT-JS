import React, { useState, useEffect } from "react";

function ManageUser() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/order")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line">Order Table</h1>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Order No.</th>
                          <th>Name</th>
                          <th>Rooms</th>
                          <th>Price</th>
                          <th>Edit/Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          orders.map((order) => (
                            <tr>
                              <td>{order.id}</td>
                              <td>{order.order_no}</td>
                              <td>{order.username}</td>
                              <td>{order.rooms}</td>
                              <td>{order.price}</td>
                              <td>
                                <button type="submit" className="btn btn-success">
                                  Edit
                                </button>
                                <button type="submit" className="btn btn-danger">
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /. PAGE INNER  */}
      </div>
    </div>
  )
}

export default ManageUser