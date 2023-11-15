// import axios from 'axios';
import axios from 'axios';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import { toast } from 'react-toastify';
const BothUser = () => {
    const [users, setUsers] = useState({
        id: uuid().slice(0, 5),
        name: "",
    })
    const onsubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:3000/users`, users);
        if (res.status === 201) {
            toast.success("success");
            setUsers({
                id: "",
                name: ""
            })
        }
    }
    
    return (
        <div>
            <h1 className='text-center'>Form</h1>
            <form action="" onSubmit={onsubmit}>
                <div className='mb-3 mt-3'>
                    <label htmlFor="name" className='form-lable'>Name</label>
                    <input type="text" name="name" value={users.name} onChange={(e) => (setUsers({ ...users, [e.target.name]: e.target.value }))} className='form-control' placeholder='Enter Name' />
                </div>
                <button type="submit" className='btn btn-danger' >Submit</button>
            </form>
        </div>
    )
}

export default BothUser
