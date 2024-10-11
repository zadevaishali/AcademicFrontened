import React from 'react';
import axios from 'axios';

const Logout = () => {
    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8080/logout',);
            localStorage.removeItem('accessToken');
            // Redirect or perform any desired action after logout
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};
export default Logout;