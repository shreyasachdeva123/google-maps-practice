import React from "react";
import Map from "./Map";
import Form from "./Form";
import Modal from "./Modal";
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Sidebar from "./Sidebar";

const AppContent = ({ coordinates, stationsData, handleClickMarker, stationName, formData, handleStatusChange, setFormData, handleClose, setShowModal, showModal, handleDashboardClick, handlePaymentsClick, array, handleMenuItemClick, handleHomeBtn }) => {
    if (showModal) {
        return (
            <Modal setShowModal={setShowModal}
                coordinates={coordinates}
                stationsData={stationsData}
                formData={formData}
                setFormData={setFormData}
                stationName={stationName}
                handleStatusChange={handleStatusChange}
                handleClose={handleClose}
                handleClickMarker={handleClickMarker}
            />
        )
    }
    else {
        return (
            <div className="wrapper">
                {/* <div className="navbar">
                    <button type="button" onClick={handleDashboardClick}>
                        <DashboardIcon style={{ fontSize: 45, color: "white", cursor: "pointer" }} /></button>
                    <button type="button" onClick={handlePaymentsClick}>
                        <CreditCardIcon style={{ fontSize: 48, color: "white", cursor: "pointer" }} />
                    </button>
                </div> */}
                <Sidebar array={array} handleMenuItemClick={handleMenuItemClick} handleHomeBtn={handleHomeBtn} />
                <div className="container">
                    <div className="mapContainer">
                        <Map coordinates={coordinates} stationsData={stationsData} handleClickMarker={handleClickMarker} />
                    </div>
                    <Form formData={formData}
                        setFormData={setFormData}
                        stationName={stationName}
                        handleStatusChange={handleStatusChange}
                        handleClose={handleClose} />
                </div>
            </div>
        )
    }
}

export default AppContent;

