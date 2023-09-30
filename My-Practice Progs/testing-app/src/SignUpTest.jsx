import React, { useEffect, useState } from 'react'
import axios from 'axios';

const SignUpTest = () => {
    const [data, setData] = useState();
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const res = await axios.post(`http://localhost:3000/user`)
        setData(res.data);
        // console.log(res.data);
    }
    return (
        <div className='container'>
            <h1 className='text-center'>Sign Up Form</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">UserName</label>
                    <input type="text" value={data.name} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={data.email} className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={data.password} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default SignUpTest
