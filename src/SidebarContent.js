import React from "react";
import { Fragment } from "react";
import AppsIcon from '@material-ui/icons/Apps';
import StoreIcon from '@material-ui/icons/Store';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import FaceIcon from '@material-ui/icons/Face';
import BookIcon from '@material-ui/icons/Book';
import MailIcon from '@material-ui/icons/Mail';
import ChatIcon from '@material-ui/icons/Chat';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';

const SidebarContent = ({ array, handleMenuItemClick }) => {
    return (
        <Fragment>
            <div className="menuHeadings">GENERAL
                <div id="1" className={array[0] ? "menuItemBlue" : "menuItem"} onClick={handleMenuItemClick}>
                    <AppsIcon />
                    <p id="1" style={{ marginLeft: 10 }}>Dashboard</p>
                </div>
                <div id="2" className={array[1] ? "menuItemBlue" : "menuItem"} onClick={handleMenuItemClick}>
                    <StoreIcon />
                    <p id="2" style={{ marginLeft: 10 }}>Payments</p>
                </div>
                <div id="3" className={array[2] ? "menuItemBlue" : "menuItem"} onClick={handleMenuItemClick}>
                    <AssessmentIcon />
                    <p id="3" style={{ marginLeft: 10 }}>Analytics</p>
                </div>
                <div id="4" className={array[3] ? "menuItemBlue" : "menuItem"} onClick={handleMenuItemClick}>
                    <AccountBalanceIcon />
                    <p id="4" style={{ marginLeft: 10 }}>Banking</p>
                </div>
                <div id="5" className={array[4] ? "menuItemBlue" : "menuItem"} onClick={handleMenuItemClick}>
                    <LaptopChromebookIcon />
                    <p id="5" style={{ marginLeft: 10 }}>Booking</p>
                </div>
            </div>
            <div className="menuHeadings">MANAGEMENT
                <div id="6" className={array[5] ? "menuItemBlue" : "menuItem"} onClick={handleMenuItemClick}>
                    <FaceIcon />
                    <p id="6" style={{ marginLeft: 10 }}>User</p>
                </div>
                <div id="7" className={array[6] ? "menuItemBlue" : "menuItem"} onClick={handleMenuItemClick}>
                    <StoreIcon />
                    <p id="7" style={{ marginLeft: 10 }}>E-Commerce</p>
                </div>
                <div id="8" className={array[7] ? "menuItemBlue" : "menuItem"} onClick={handleMenuItemClick}>
                    <BookIcon />
                    <p id="8" style={{ marginLeft: 10 }}>Blog</p>
                </div>
            </div>
            <div className="menuHeadings">APP
                <div id="9" className={array[8] ? "menuItemBlue" : "menuItem"} onClick={handleMenuItemClick}>
                    <MailIcon />
                    <p id="9" style={{ marginLeft: 10 }}>Mail</p>
                </div>
                <div id="10" className={array[9] ? "menuItemBlue" : "menuItem"} onClick={handleMenuItemClick}>
                    <ChatIcon />
                    <p id="10" style={{ marginLeft: 10 }}>Chat</p>
                </div>
                <div id="11" className={array[10] ? "menuItemBlue" : "menuItem"} onClick={handleMenuItemClick}>
                    <CalendarTodayIcon />
                    <p id="11" style={{ marginLeft: 10 }}>Calendar</p>
                </div>
                <div id="12" className={array[11] ? "menuItemBlue" : "menuItem"} onClick={handleMenuItemClick}>
                    <ImportantDevicesIcon />
                    <p id="12" style={{ marginLeft: 10 }}>Kanban</p>
                </div>
            </div>
        </Fragment>
    )
}

export default SidebarContent;