import React from 'react'

function ManageProduct() {
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
                        <tr>
                          <td>1</td>
                          <td>Junior Suite</td>
                          <td>₹2000</td>
                          <td>
                            <button type="submit" className="btn btn-success">Edit</button>
                            <button type="submit" className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Executive Suite</td>
                          <td>₹4000</td>
                          <td>
                            <button type="submit" className="btn btn-success">Edit</button>
                            <button type="submit" className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Super Deluxe</td>
                          <td>₹7000</td>
                          <td>
                            <button type="submit" className="btn btn-success">Edit</button>
                            <button type="submit" className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
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