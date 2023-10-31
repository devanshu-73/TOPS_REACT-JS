import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insert } from '../../userReducer';

function Add_data() {


    const [formValue, setFormValue] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: ""
    })

    const changehandel = (e) => {
        setFormValue({ ...formValue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    }

    const dispatch = useDispatch();

    const submithandel = (e) => {
        e.preventDefault();
        dispatch(insert(`http://localhost:3000/user`, formValue));
        setFormValue({ ...formValue, name: "", email: "", password: "", mobile: "" });
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-8 offset-md-2">
                        <form action="">
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Name:</label>
                                <input type="text" value={formValue.name} onChange={changehandel} className="form-control" id="Name" placeholder="Enter Name" name="name" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Email:</label>
                                <input type="email" value={formValue.email} onChange={changehandel} className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd">Password:</label>
                                <input type="password" value={formValue.password} onChange={changehandel} className="form-control" id="pwd" placeholder="Enter password" name="password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd">Mobile:</label>
                                <input type="number" value={formValue.mobile} onChange={changehandel} className="form-control" id="Mobile" placeholder="Enter Mobile" name="mobile" />
                            </div>

                            <button type="submit" onClick={submithandel} className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_data