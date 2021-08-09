import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ setShowModal }) => {

    function handleCloseModal() {
        setShowModal(false);
    }

    return ReactDOM.createPortal(
        <div className="modal">
            <p>Please enter an IP address.</p>
            <button className="modalBtn" type="button" onClick={handleCloseModal}>X</button>
        </div>, document.getElementById("portal")
    )
}

export default Modal;

