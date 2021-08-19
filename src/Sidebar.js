import React from "react";

const Sidebar = ({ handleHomeBtn }) => {
    return (
        <div className="sidebar">
            <button type="button" onClick={handleHomeBtn}>Home</button>
        </div>
    )
}

export default Sidebar;