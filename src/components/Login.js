import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const[role,setRole]=useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
        if(name === 'role')setRole(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // when the form is submitted, event.preventDefault() prevents the browser from reloading the page.
        console.log('Enter into handleSubmit function ' + username);
        const loginData = { username, password ,role};

        try {
            const response = await axios.post('http://localhost:8080/login', loginData);

            if (response.status === 200) {
                console.log(response.data);
                localStorage.setItem('accessToken', response.data.token);
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('fullName', response.data.fullName);
                alert('Successfully Login');
                navigate('/studentHome');
            } else if (response.status === 204) {
                setMessage('Password does not match');
            }
        } catch (error) {
            if (error.response) {
                const { status } = error.response;
                if (status === 401) {
                    setMessage('Invalid username & password');
                } else if (status === 400) {
                    setMessage('Username not found');
                } else {
                    setMessage('An error occurred');
                }
            } else if (error.request) {
                setMessage('No response from server');
            } else {
                setMessage('Error: ' + error.message);
            }
        }
    };

    return (
        <div id="acd-login">
            <div id="form-login">
                <div>
                    <h4 style={{ color: 'red' }}>{message}</h4>
                    <h2 id="store-header">Academic Profile Manager</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="user-info">
                        <label htmlFor="username">Username: </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="user-info">
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={handleChange}
                            required
                        />
                    </div >
                    <div className='user-info'>
                        <label htmlFor='role'>Role</label>
                        <input
                            type="text"
                            name="role"
                            id="role"
                            value={role}
                            onChange={handleChange}
                            required
                        
                        />


                        </div>

                    {/* <div id="custom-select">
                        <select>
                            <option value="ADMINISTRATOR">ADMIN</option>
                            <option value="FACULTY">FACULTY</option>
                            <option value="STUDENT">STUDENT</option>
                        </select>
                    </div> */}
                    <div id="login">
                        <div id="login-button">
                            <button name="LOGIN">LOGIN</button>
                        </div>
                        <div>
                            <Link to="/registration">
                                <button name="REGISTRATION">REGISTRATION</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
