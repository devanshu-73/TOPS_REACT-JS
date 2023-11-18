import React, { useState } from 'react'
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';
const PostUser = () => {
    const [users, setUsers] = useState({
        id: uuid().slice(0, 5),
        name: ""
    })
    const handleChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:3000/users`, users);
        if (res.status === 201) {
            toast.success('Post SuccessFully');
            setUsers({ ...users, id: uuid().slice(0, 5), name: "" })
        }
    }
    return (
        <>
            <h1 className='text-center'>Post User</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <form className='col-6' action="" onSubmit={handleSubmit}>
                    <div className='mb-3 mt-3'>
                        <label htmlFor="name" className='form-lable'>Name</label>
                        <input type="text" className='form-control' placeholder='Enter Name' name="name" onChange={handleChange} value={users.name} />
                    </div>
                    <button className='btn btn-primary' type="submit">Post</button>
                </form>
            </div>
        </>
    )
}

export default PostUser
