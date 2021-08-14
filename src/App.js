import React from "react";
import { StrictMode, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import AppContent from "./AppContent";


const App = () => {
  const [stationsData, setStationsData] = useState([]);
  const [coordinates] = useState({ lat: 49.2831, lng: -123.1157 });
  const [stationName, setStationName] = useState("");
  const [technicianUpdate, setTechnicianUpdate] = useState("");
  const [statusColor, setStatusColor] = useState("");

  useEffect(() => {
    getStationInfo();
  }, [])

  function handleStatusChange(e) {
    console.log(technicianUpdate);
    fetch(`https://morning-dusk-47149.herokuapp.com/api/locations/${e.target.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ technicianDetails: technicianUpdate, status: statusColor })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        for (var i = 0; i < stationsData.length; i++) {
          if (i === e.target.id) {
            let array = stationsData.splice(i, 1, data.results);
            console.log(array);
            setStationsData([...array]);
          }
        }
      })
      .catch((error) => console.log(error))
  }

  console.log(stationsData);

  function getStationInfo() {
    fetch("https://morning-dusk-47149.herokuapp.com/api/locations/", {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setStationsData([...data.results, ...stationsData])
      })
  }

  function handleClickMarker(e) {
    console.log(e.target);
    setStationName(e.target.id);
  }

  console.log(stationsData);

  return (
    <>
      <AppContent coordinates={coordinates} stationsData={stationsData} handleClickMarker={handleClickMarker} stationName={stationName} handleStatusChange={handleStatusChange} technicianUpdate={technicianUpdate} setTechnicianUpdate={setTechnicianUpdate} statusColor={statusColor} setStatusColor={setStatusColor} />
    </>
  )
}

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));

export default App;

