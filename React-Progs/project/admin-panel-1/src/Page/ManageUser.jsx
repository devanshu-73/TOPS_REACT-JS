import React, { useState, useEffect } from "react";
import axios from 'axios'
function ManageUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3000/user")
    //   .then((response) => response.json())
    //   .then((data) => setUsers(data));


    // Axios.........
    axios.get('http://localhost:3000/user')
      .then((response) => setUsers(response.data))
  }, []);
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
                          <th>Id</th>
                          <th>Username</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Edit/Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          users.map((user) => (
                            <tr>
                              <td>{user.id}</td>
                              <td>{user.username}</td>
                              <td>{user.phone}</td>
                              <td>{user.email}</td>
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
        {/* /. PAGE-INNER  */}
      </div>
    </div>
  );
}

export default ManageUser;
