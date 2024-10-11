import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import StudentHome from "./StudentHome";
import Logout from './Logout';
import HeaderWithMenu from "./HeaderWithMenu";
import Dashboard from "./DashBoard";
import ProfileManager from "./ProfileManager";
import Courses from "./Courses";

const Layout = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path={"/menu"} element={<HeaderWithMenu />} />
                    <Route path="/studentHome" element={<StudentHome />} />
                    <Route path="/profile" element={<ProfileManager />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} /> 
                    <Route path="/courses" element={<Courses />} /> 

                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Layout;
