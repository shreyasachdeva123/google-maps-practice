import React from "react";
// import { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";


// const center = {
//     lat: 53.726669,
//     lng: -127.647621
// };

const Map = ({ locationInfo, coordinates }) => {

    console.log(coordinates);

    return (
        <div className="googleMap" style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAvwDWrA2Vzh2q5Tx0lVECVwha10CdC3lk" }}
                center={coordinates}
                defaultZoom={10}
            >
                <Marker
                    lat={locationInfo.lat}
                    lng={locationInfo.lon}
                    text="Marker"
                />
            </GoogleMapReact>
        </div>
    )
}


export default Map;