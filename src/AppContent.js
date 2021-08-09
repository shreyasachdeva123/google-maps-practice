import React from "react";
import Map from "./Map";

const AppContent = ({ coordinates, showMarker, setIpAddress, ipAddress, getIpData, handleClear }) => {
    return (
        <div className="wrapper">
            <div className="navbar">
                <p>AccessView SmartConsole</p>
            </div>
            <div className="container">
                <div className="mapContainer">
                    <Map coordinates={coordinates} showMarker={showMarker} />
                </div>
                <form >
                    <label htmlFor="inputField">Please enter your IP address:</label>
                    <input placeholder="Type here" type="text" id="inputField" onChange={(e) => setIpAddress(e.target.value)} value={ipAddress} />
                    <div className="buttons">
                        <button className="submitBtn" type="button" onClick={getIpData}>Submit</button>
                        <button className="clearBtn" type="button" onClick={handleClear}>Clear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AppContent;