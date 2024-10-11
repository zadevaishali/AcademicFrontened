import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../css/header.css';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const storedFullName = localStorage.getItem('fullName');
    
    if (accessToken) {
      setLoggedIn(true);
      setFullName(storedFullName);
    }
  }, []); // Only runs once, on component mount

  const handleLogout = async () => {
    try {
      const username = localStorage.getItem('username');
      const parameter = { username };
      
      const response = await axios.post('http://localhost:8080/logout', parameter);
      if (response.status === 200) {
        alert(response.data);
        localStorage.clear();
        navigate('/');
      }
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        if (status === 401 || status === 400 || status === 500) {
          alert(data);
        } else {
          alert('An error occurred');
        }
      } else if (error.request) {
        alert('No response from server');
      } else {
        alert('Error: ' + error.message);
      }
    }
  };

  return (
    <div className="topnav">
      {loggedIn ? (
        <div>
          <button className={"active"} onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to={"/login"}><button className={"active"}>Login</button></Link>
        </div>
      )}
      <div>
        <p id="username">{fullName}</p>
      </div>
    </div>
  );
};

export default Header;
