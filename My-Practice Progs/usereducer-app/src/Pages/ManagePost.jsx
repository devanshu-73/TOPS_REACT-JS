import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
const ManagePost = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:3000/users`);
    setUsers(res.data);
  }

  const handleUpdate = async (id) => {
    const res = await axios.get(`http://localhost:3000/users/${id}`);
    setUser(res.data);
  }
  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/users/${id}`);
    console.log(res.status);
    if (res.status === 200) {
      toast.success('User Deleted SuccessFully');
      fetchData();
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <table className='table-bordered m-3'>
        <thead>
          <tr>
            <th className='text-center p-3'>Id</th>
            <th className='text-center p-3'>Name</th>
            <th className='text-center p-3'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <tr key={user.id}>
                <td className='text-center p-3'>{user.id}</td>
                <td className='text-center p-3'>{user.name}</td>
                <td>
                  <button type="button" className='btn btn-primary ms-1 me-1 my-1' onClick={() => handleUpdate(user.id)}
                    data-bs-toggle="modal" data-bs-target="#exampleModal" >
                    Edit
                  </button>
                  <button type="button" className='btn btn-danger me-1 my-1' onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="exampleModalLabel">Update Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='d-flex justify-content-center align-items-center'>
                <form action="">
                  <div className='mb-3 mt-3'>
                    <label htmlFor="name" className='form-lable'>Name</label>
                    <input type="text" className='form-control' placeholder='Enter Name' onChange={(e) => ({ ...user, [e.target.name]: e.target.value })} value={user.name} name="name" />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ManagePost
