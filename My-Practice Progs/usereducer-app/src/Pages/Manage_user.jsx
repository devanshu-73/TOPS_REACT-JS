import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Manage_user = () => {

  const [userData, setUserData] = useState([]);

  const fetchData = async () => {

    const res = await axios.get(`http://localhost:3000/users`);
    setUserData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='d-flex justify-content-center align-items-center mt-3'>
      <table className='table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Manage_user
