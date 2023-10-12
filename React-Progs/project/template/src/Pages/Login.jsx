/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const auth = getAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, username, password);
            const user = userCredential.user;

            if (user) {
                if (user.emailVerified) {
                    alert('Login successful');
                    navigate('/profile');
                } else {
                    alert('Email not verified. Please verify your email before logging in.');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Login Failed. Please check your username and password.');
        }
    };

    return (
        <>
            <div>
                <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 100 }}>
                    <div className="row ">
                        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                            <div className="panel-body">
                                <form role="form" style={{ width: "300px", marginTop: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <h5>Enter Details to Login</h5>
                                    <div className="form-group input-group" style={{ padding: 10 }}>
                                        <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                        <input type="text" className="form-control" value={username} onChange={handleUsernameChange} placeholder="Username" />
                                    </div>

                                    <div className="form-group input-group" style={{ padding: 10 }}>
                                        <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                        <input type="password" className="form-control" value={password} onChange={handlePasswordChange} placeholder="Password" />
                                    </div>
                                    <button type="button" onClick={handleLogin} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="btn btn-primary">
                                        Login Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
