/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

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

    const saveData = (e) => {
        e.preventDefault();

        const userId = localStorage.getItem('uid');

        if (!userId) {
            toast.error('User ID is missing.');
            return;
        }

        try {
            localStorage.setItem(userId, JSON.stringify({
                username: formValue.username,
                email: formValue.email,
                phone: formValue.phone,
                password: formValue.password,
            }));

            toast.success('Profile updated successfully');
            navigate('/profile');
        } catch (error) {
            toast.error('Failed to update profile: ' + error.message);
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Profile Page</h3>
                            <form className="text-center">
                                <div className="form-group">
                                    <FontAwesomeIcon icon={faUser} className="fa-lg" />
                                    <input type="text" className="form-control" onChange={onChange} value={formValue.username} name="username" placeholder="Your UserName" />
                                </div>
                                <div className="form-group">
                                    <FontAwesomeIcon icon={faPhone} className="fa-lg" />
                                    <input type="number" className="form-control" onChange={onChange} value={formValue.phone} name="phone" placeholder="Your Phone" />
                                </div>
                                <div className="form-group">
                                    <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />
                                    <input type="email" className="form-control" onChange={onChange} value={formValue.email} name="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <FontAwesomeIcon icon={faLock} className="fa-lg" />
                                    <input type="password" className="form-control" onChange={onChange} value={formValue.password} name="password" placeholder="Your Password" />
                                </div>
                                <button type="button" className="btn btn-primary" onClick={saveData}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
