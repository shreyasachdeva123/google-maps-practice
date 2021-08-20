import React from "react";

const Sidebar = ({ handleHomeBtn }) => {
    return (
        <div className="sidebar">
            <button type="button" onClick={handleHomeBtn}>Home</button>
            <div>General
                <p>App</p>
                <p>E-Commerce</p>
                <p>Analytics</p>
                <p>Banking</p>
                <p>Booking</p>
            </div>
            <div>Management
                <p>User</p>
                <p>E-Commerce</p>
                <p>Blog</p>
            </div>
            <div>App
                <p>Mail</p>
                <p>Chat</p>
                <p>Calendar</p>
                <p>Kanban</p>
            </div>
        </div>
    )
}

export default Sidebar;