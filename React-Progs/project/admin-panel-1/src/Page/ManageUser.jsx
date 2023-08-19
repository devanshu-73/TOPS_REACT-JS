import React from 'react'

function ManageUser() {
  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line">User Table</h1>
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
                          <th>Username</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Edit/Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Jay</td>
                          <td>987465232</td>
                          <td>@Jaypara</td>
                          <td>
                            <button type="submit" className="btn btn-success">Edit</button>
                            <button type="submit" className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Tirth</td>
                          <td>987151232</td>
                          <td>@Tirthra</td>
                          <td>
                            <button type="submit" className="btn btn-success">Edit</button>
                            <button type="submit" className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Dev</td>
                          <td>99225232</td>
                          <td>@Devanshu</td>
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

export default ManageUser