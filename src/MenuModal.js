import React from "react";
// import SidebarContent from "./SidebarContent";
// import LeftSidebar from "./LeftSidebar";
import ReactDOM from "react-dom";
import SidebarContent from "./SidebarContent";

const MenuModal = ({ showMenu, setShowMenu, array, handleMenuItemClick }) => {

    function handleCloseModal(e) {
        if (e.target.id === "modalWindow") {
            setShowMenu(false);
        }
    }

    if (showMenu) {
        return ReactDOM.createPortal
            (
                <div id="modalWindow" className="modalContainer" onClick={handleCloseModal}>
                    <div className="modalWrapper" style={{ display: "flex", flexDirection: "column", position: "fixed", top: 0, left: 0, bottom: 0, width: "40%", zIndex: 1000, backgroundColor: "whitesmoke" }}>
                        {/* <LeftSidebar array={array} handleMenuItemClick={handleMenuItemClick} /> */}
                        <SidebarContent array={array} handleMenuItemClick={handleMenuItemClick} />
                    </div>
                </div>, document.getElementById("menuPortal")
            )
    } else {
        return null;
    }
}

export default MenuModal;