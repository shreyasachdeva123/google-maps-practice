import React from "react";
// import { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";


const Map = ({ coordinates, stationsData, handleClickMarker }) => {
    return (
        <div className="googleMap" style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAvwDWrA2Vzh2q5Tx0lVECVwha10CdC3lk" }}
                center={coordinates}
                defaultZoom={10}
            >
                {
                    stationsData.map((station, index) =>
                        <Marker lat={station.lat} lng={station.lng} key={index} handleClickMarker={handleClickMarker} id={station.name} status_color={station.status} />)
                }

            </GoogleMapReact>
        </div>
    )

}

export default Map;