import React, { useState, useEffect } from "react";
function ManageProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line">Table</h1>
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
                          <th>Rooms</th>
                          <th>Price</th>
                          <th>Edit/Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          products.map((product) => (
                            <tr>
                              <td>{product.id}</td>
                              <td>{product.rooms}</td>
                              <td>{product.price}</td>
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

export default ManageProduct