import React from "react";
import ReactDOM from "react-dom";
import Map from "./Map";
import Form from "./Form";
import { Fragment } from "react";

const Modal = ({ setShowModal, coordinates, stationsData, formData, setFormData, stationName, handleStatusChange, handleClose, handleClickMarker }) => {

    function handleCloseModal() {
        setShowModal(false);
    }

    return ReactDOM.createPortal(
        <Fragment>
            <div className="modal">
                <p>Please make a valid selection.</p>
                <button className="modalBtn" type="button" onClick={handleCloseModal}>X</button>
            </div>
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
        </Fragment>, document.getElementById("portal")
    )
}

export default Modal;

