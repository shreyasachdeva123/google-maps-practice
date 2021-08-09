import React from "react";


const Marker = ({ showMarker }) => {

    if (showMarker) {
        return (
            <div className="marker">
                <img src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" alt="pin" />
            </div>
        )
    } else {
        return null;
    }
}

export default Marker;

