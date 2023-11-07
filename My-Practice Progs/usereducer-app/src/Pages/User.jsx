import React, { useState, useEffect } from "react";
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function User() {
  const [userData, setUserData] = useState([]);
  const [users, setUsers] = useState({
    id: uuid().slice(0, 10),
    name: "",
    email: "",
    password: ""
  });

  const onchange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  const validation = () => {
    let result = true;
    if (users.name === "") {
      toast.error("Enter User Name Properly..");
      result = false;
    }
    if (users.email === "") {
      toast.error("Enter User Email Properly..");
      result = false;
    }
    if (users.password === "") {
      toast.error("Enter Password Properly..");
      result = false;
    }
    return result;
  }

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      if (validation()) {
        const res = await axios.post("http://localhost:3000/users", users);
        if (res.status === 201) {
          toast.success("User created successfully");
          fetchData();
          setUsers({
            id: uuid().slice(0, 10),
            name: "",
            email: "",
            password: ""
          });
        }
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Error creating user");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      toast.success("User deleted successfully");
      fetchData();
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user");
    }
  }

  return (

    <>
      <h1 className='text-center'>Sign Up Form</h1>
      <div className='d-flex justify-content-center align-items-center'>
        <form className='col-6' onSubmit={onsubmit}>
          <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" className="form-control" name="name" value={users.name} onChange={onchange} placeholder="Enter Name" />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" name="email" value={users.email} onChange={onchange} placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" className="form-control" name="password" value={users.password} onChange={onchange} placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>


      <div className="container mt-3">
        <table className="table table-hover table-bordered text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              userData.map((user, index) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td className="d-flex justify-content-evenly align-items-center">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

