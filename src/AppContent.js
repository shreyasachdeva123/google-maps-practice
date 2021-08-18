import React from "react";
import Map from "./Map";
import Form from "./Form";
import Modal from "./Modal";

const AppContent = ({ coordinates, stationsData, handleClickMarker, stationName, formData, handleStatusChange, setFormData, handleClose, setShowModal, showModal }) => {
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
                <div className="navbar">
                    <p>AccessView SmartConsole</p>
                </div>
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

