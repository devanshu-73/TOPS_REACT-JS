/* eslint-disable eqeqeq */
import axios from 'axios'
import React, { useState } from 'react'

const SignUpTest = () => {
    const [user, setUser] = useState([]);
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    const onchange = (e) => {
        setData({ ...data, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
        console.log(data);
    }
    function validation() {
        var result = true;
        if (data.username == "") {
            alert("Username is empty");
            result = false;
        }
        if (data.password == "") {
            alert("Password is empty");
            result = false;
        }
        return result;
    }
    const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post('https://testapp-73-default-rtdb.asia-southeast1.firebasedatabase.app/userData.json', data);
            if (res.status == 200) {
                // alert("success");
                alert("Resource created successfully");
                setData({ ...data, username: "", password: "" });
            } else {
                // Handle other status codes or errors
                console.log('nothing');
            }

        }
    }
    const getData = async () => {
        const res = await axios.get('https://testapp-73-default-rtdb.asia-southeast1.firebasedatabase.app/userData.json');
        setUser(res.data)
    }
    return (
        <div className='container'>
            <h1 className='text-center'>Sign Up Form</h1>
            <hr />
            <form className='d-flex flex-column justify-content-center align-items-center'>
                <div>
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" className="form-control" value={data.username} onChange={onchange} />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="text" name="password" className="form-control" value={data.password} onChange={onchange} />
                </div>
                <div className='mt-2 d-flex justify-content-center align-items-center'>
                    <button type="submit" onClick={onsubmit} className='btn btn-primary'>Sign Up Now</button>
                </div>
            </form >
            <button type="button" onClick={getData} className='btn btn-primary'>Show Data</button>

            <table border='2px solid black'>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
                {
                    user.map((userdetail) => (
                        <tr>
                            <td>{userdetail.username}</td>
                            <td>{userdetail.password}</td>
                        </tr>
                    ))
                }
            </table>



        </div >
    )
}

export default SignUpTest
