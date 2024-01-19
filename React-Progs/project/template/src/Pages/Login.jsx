import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faLock } from '@fortawesome/free-solid-svg-icons';

function Login() {
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
            const response = await axios.get(`http://localhost:3000/users?username=${username}&password=${password}`);
    
            if (response.data.length > 0) {
                alert('Login successful');
                navigate('/profile'); // Use the navigate function to redirect to the profile page
            } else {
                alert('Login failed. Please check your username and password.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Login failed. Please try again.');
        }
    };
    

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Login</h3>
                            <form className="text-center">
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <FontAwesomeIcon icon={faTag} />
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" value={username} onChange={handleUsernameChange} placeholder="Username" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <FontAwesomeIcon icon={faLock} />
                                            </span>
                                        </div>
                                        <input type="password" className="form-control" value={password} onChange={handlePasswordChange} placeholder="Password" />
                                    </div>
                                </div>
                                <button type="button" onClick={handleLogin} className="btn btn-primary">
                                    Login Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
