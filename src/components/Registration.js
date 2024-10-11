import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import '../css/registration.css';

const Registration = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        mobileNo: '',
        fullName: '',
        role: 'student'
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password, mobileNo, fullName, role } = formData;
        const registrationData = { username, password, mobileNo, fullName, role };

        try {
            console.log(registrationData);
            const response = await axios.post('http://localhost:8080/registration', registrationData);

            if (response.status === 200) {
                alert(response.data);
                navigate('/login');
            }
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (status === 401 || status === 400 || status === 500) {
                    setMessage(data);
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
        <div id={"ims-login"}>
            <div id={"form-login"}>
                <div>
                    <h4>{message}</h4>
                    <h2 id={"store-header"}>REGISTRATION</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <div className={"user-info"}>
                            <label htmlFor={"fullName"}>Full Name: </label>
                            <input
                                type={"text"}
                                name={"fullName"}
                                id={"fullName"}
                                placeholder="Enter Full Name"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={"user-info"}>
                            <label htmlFor={"username"}>Username: </label>
                            <input
                                type={"text"}
                                name={"username"}
                                id={"username"}
                                placeholder="Enter Email"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={"user-info"}>
                            <label htmlFor={"password"}>Password: </label>
                            <input
                                type={"password"}
                                name={"password"}
                                id={"password"}
                                placeholder="Enter Password"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={"user-info"}>
                            <label htmlFor={"mobileNo"}>MobileNo: </label>
                            <input
                                type={"text"}
                                name={"mobileNo"}
                                id={"mobileNo"}
                                placeholder="Enter Mobile No"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={"user-info"}>
                            <label htmlFor={"isStudent"}>Student </label>
                            <input
                                type="radio"
                                name="role"
                                value="student"
                                checked={formData.role === 'student'}
                                onChange={handleChange}
                            />
                            <label htmlFor={"isFaculty"}>Faculty </label>
                            <input
                                type="radio"
                                name="role"
                                value="faculty"
                                checked={formData.role === 'faculty'}
                                onChange={handleChange}
                            />
                        </div>

                        <div id={"login"}>
                            <div id={"login-button"}>
                                <button type="submit" name={"LOGIN"}>REGISTRATION</button>
                            </div>
                        </div>
                    </div>

                    <div className="container signin">
                        <p>Already have an account? <Link to={"/"}>Sign in</Link>.</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
