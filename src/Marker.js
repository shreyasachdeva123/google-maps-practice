import React from "react";


const Marker = ({ handleClickMarker, id, status_color }) => {
    // console.log(id);

    return (
        <div className="marker">
            <div className={status_color === "Green" ? "greenMarker" : "redMarker"} onClick={handleClickMarker} id={id} />
            <img src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" alt="pin" />
        </div>
    )
}

export default Marker;

// className={station_color === "green" ? "marker" : "redMarker"
