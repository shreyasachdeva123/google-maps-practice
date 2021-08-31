import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from "react";
import MainSidebar from "./MainSidebar";
import MenuModal from "./MenuModal";


const Sidebar = ({ handleHomeBtn, array, handleMenuItemClick }) => {
    const [showMenu, setShowMenu] = useState(false);

    function handleOpenMenu() {
        setShowMenu(true);
    }

    if (!showMenu) {
        return (
            <div className="sidebar">
                <button className="menuBtn" type="button" onClick={handleOpenMenu}><MenuIcon style={{ color: "blue", fontSize: 55 }} /></button>
                <button className="homeBtn" type="button" onClick={handleHomeBtn}><HomeIcon style={{ color: "blue", fontSize: 50 }} /></button>
                <MainSidebar array={array} handleMenuItemClick={handleMenuItemClick} />
            </div>
        )
    }
    else {
        return (
            <MenuModal showMenu={showMenu} setShowMenu={setShowMenu} array={array} handleMenuItemClick={handleMenuItemClick} />
        )
    }
}

export default Sidebar;