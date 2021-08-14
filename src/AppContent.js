import React from "react";
import Map from "./Map";

const AppContent = ({ coordinates, stationsData, handleClickMarker, stationName, handleStatusChange, setTechnicianUpdate, technicianUpdate, statusColor, setStatusColor }) => {
    console.log(stationsData);
    return (
        <div className="wrapper">
            <div className="navbar">
                <p>AccessView SmartConsole</p>
            </div>
            <div className="container">
                <div className="mapContainer">
                    <Map coordinates={coordinates} stationsData={stationsData} handleClickMarker={handleClickMarker} />
                </div>
                {
                    // eslint-disable-next-line array-callback-return
                    stationsData.map((stationObj, index) => {
                        if (stationName === stationObj.name) {
                            return (
                                <form key={index}>
                                    <label htmlFor="inputField">Station</label>
                                    <input id="stationName" value={stationObj.name} />
                                    <label htmlFor="statusInfo">Status</label>
                                    <select name="status" id="statusInfo" value={statusColor} onChange={(e) => setStatusColor(e.target.value)}>
                                        <option value="Green">Green</option>
                                        <option value="Red">Red</option>
                                    </select>
                                    <label htmlFor="technicianStatus">Technician Details</label>
                                    <select id="technicianStatus" onChange={(e) => setTechnicianUpdate(e.target.value)} value={technicianUpdate}>
                                        <option value="Issue Detected">Issue Detected</option>
                                        <option value="Technician on The Way">Technician on The Way</option>
                                        <option value="Work-in-Progress">Work-in-Progress</option>
                                        <option value="Issue Resolved">Issue Resolved</option>
                                    </select>
                                    <button className="saveBtn" onClick={handleStatusChange} type="button" id={stationObj.id}>Save</button>
                                </form>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default AppContent;