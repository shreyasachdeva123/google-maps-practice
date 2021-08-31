import React from "react";
import SidebarContent from "./SidebarContent";


const MainSidebar = ({ array, handleMenuItemClick }) => {

    return (
        <div className="menuWrapper">
            <SidebarContent array={array} handleMenuItemClick={handleMenuItemClick} />
        </div>
    )
}

export default MainSidebar;