import React from "react";
// import { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";


const Map = ({ coordinates, firstTime }) => {
    console.log(coordinates);
    if (!firstTime) {
        return (
            <div className="googleMap" style={{ height: '100%', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAvwDWrA2Vzh2q5Tx0lVECVwha10CdC3lk" }}
                    center={coordinates}
                    defaultZoom={10}
                ></GoogleMapReact>
            </div>
        )
    }
    else {
        return (
            <div className="googleMap" style={{ height: '100%', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAvwDWrA2Vzh2q5Tx0lVECVwha10CdC3lk" }}
                    center={coordinates}
                    defaultZoom={10}
                >
                    <Marker />
                </GoogleMapReact>
            </div>
        )
    }
}

export default Map;