// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../css/dashboard.css';


// const Dashboard = () => {
//     const [userRole, setUserRole] = useState('');
//     const [username, setUsername] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedRole = localStorage.getItem('role');
//         const storedUsername = localStorage.getItem('username');
//         if (!storedRole || !storedUsername) {
//             navigate('/login'); // Redirect to login if no role or username is found
//         } else {
//             setUserRole(storedRole);
//             setUsername(storedUsername);
//         }
//     }, [navigate]);

//     const renderAdminDashboard = () => {
//         return (
//             <div>
//                 <h2>Admin Dashboard</h2>
//                 <ul>
//                     <li><button onClick={() => navigate('/manage-users')}>Manage Users</button></li>
//                     <li><button onClick={() => navigate('/reports')}>View Reports</button></li>
//                     <li><button onClick={() => navigate('/academic-calendar')}>Manage Academic Calendar</button></li>
//                     <li><button onClick={() => navigate('/notifications')}>Manage Notifications</button></li>
//                 </ul>
//             </div>
//         );
//     };

//     const renderFacultyDashboard = () => {
//         return (
//             <div>
//                 <h2>Faculty Dashboard</h2>
//                 <ul>
//                     <li><button onClick={() => navigate('/manage-courses')}>Manage Courses</button></li>
//                     <li><button onClick={() => navigate('/gradebook')}>Manage Grades</button></li>
//                     <li><button onClick={() => navigate('/attendance')}>Track Attendance</button></li>
//                     <li><button onClick={() => navigate('/faculty-notifications')}>View Notifications</button></li>
//                 </ul>
//             </div>
//         );
//     };

//     const renderStudentDashboard = () => {
//         return (
//             <div>
//                 <h2>Student Dashboard</h2>
//                 <ul>
//                     <li><button onClick={() => navigate('/academic-profile')}>View Academic Profile</button></li>
//                     <li><button onClick={() => navigate('/assignments')}>View Assignments</button></li>
//                     <li><button onClick={() => navigate('/attendance')}>View Attendance</button></li>
//                     <li><button onClick={() => navigate('/student-calendar')}>View Academic Calendar</button></li>
//                     <li><button onClick={() => navigate('/student-notifications')}>View Notifications</button></li>
//                 </ul>
//             </div>
//         );
//     };

//     const renderDashboard = () => {
//         switch (userRole) {
//             case 'ADMINISTRATOR':
//                 return renderAdminDashboard();
//             case 'FACULTY':
//                 return renderFacultyDashboard();
//             case 'STUDENT':
//                 return renderStudentDashboard();
//             default:
//                 return <p>Invalid role. Please log in again.</p>;
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <h1>Welcome, {username}</h1>
//             {renderDashboard()}
//         </div>
//     );
// };

// export default Dashboard;
