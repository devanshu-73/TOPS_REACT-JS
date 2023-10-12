/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getDatabase, ref, set } from 'firebase/database';

function Profile() {
    const navigate = useNavigate();

    const [formValue, setFormValue] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }

    const saveData = async (e) => {
        e.preventDefault();

        // Ensure you have the user's unique ID; you can retrieve it from wherever you store it.
        const userId = localStorage.getItem('uid'); 

        if (!userId) {
            toast.error('User ID is missing.');
            return;
        }

        // Initialize Firebase Realtime Database
        const db = getDatabase();
        const userRef = ref(db, `users/${userId}`);

        try {
            // Update the user's data in the database
            await set(userRef, {
                username: formValue.username,
                email: formValue.email,
                phone: formValue.phone,
                password: formValue.password,
            });

            toast.success('Profile updated successfully');
            navigate('/profile'); // Navigate back to the profile page or any other page you prefer
        } catch (error) {
            toast.error('Failed to update profile: ' + error.message);
        }
    }

    return (
        <div>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 100 }}>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                        <div className="panel-body">
                            <form role="form" style={{ width: "300px", marginTop: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <h5>Profile Page</h5>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="text" className="form-control" onChange={onChange} value={formValue.username} name="username" placeholder="Your UserName" />
                                </div>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="number" className="form-control" onChange={onChange} value={formValue.phone} name="phone" placeholder="Your Phone" />
                                </div>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="email" className="form-control" onChange={onChange} value={formValue.email} name="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                    <input type="password" className="form-control" onChange={onChange} value={formValue.password} name="password" placeholder="Your Password" />
                                </div>
                                <button type="button" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={saveData} className="btn btn-primary">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
