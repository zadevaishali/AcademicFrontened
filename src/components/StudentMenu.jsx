import React, { Component } from "react";
import '../css/menu.css'

class StudentMenu extends Component {
    render() {
        return (
            <>
                <div>
                    <ul>
                        <li><a className="active" href="/studentHome">Home</a></li>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/profile">Achievements</a></li>
                        <li><a href="/profile">Publications</a></li>
                        
                    </ul>
                </div>
            </>);
    }
}

export default StudentMenu;