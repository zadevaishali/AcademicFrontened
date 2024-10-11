import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Courses =()=>{
    const [courseData, setCourseData] = useState({
        courseName: '',
        duration: ''
        
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCourseData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { courseName,duration } = courseData;
        const newCourseData = { courseName,duration };

        try {
            console.log(newCourseData);
            const response = await axios.post('http://localhost:8080/addCourse', newCourseData);

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
                            <label htmlFor={"fullName"}>Course Name: </label>
                            <input
                                type={"text"}
                                name={"courseName"}
                                id={"courseName"}
                                placeholder="Enter Course Name"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={"user-info"}>
                            <label htmlFor={"username"}>Duration: </label>
                            <input
                                type={"text"}
                                name={"duration"}
                                id={"duration"}
                                placeholder="Enter Course Duration"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        

                        <div id={"login"}>
                            <div id={"login-button"}>
                                <button type="submit" name={"LOGIN"}>Submit Course</button>
                            </div>
                        </div>
                    </div>

                    
                </form>
            </div>
        </div>
    );
};
export default Courses;
