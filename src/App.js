import React from "react";
import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import AppContent from "./AppContent";
import Modal from "./Modal";

const App = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 53.726669, lng: -127.647621 });
  const [showMarker, setShowMarker] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function getIpData(e) {
    if (ipAddress === "") {
      setShowModal(true);
      setShowMarker(false);
    } else {
      fetch(`http://ip-api.com/json/${ipAddress}`
      ).then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCoordinates({ "lat": data.lat, "lng": data.lon });
        })
        .catch((error) => console.log("There is an error!", error))
      setShowMarker(true);
    }
  }

  function handleClear() {
    setShowMarker(false);
    setIpAddress("");
  }

  if (showModal) {
    return (
      <>
        <Modal setShowModal={setShowModal} />
        <AppContent ipAddress={ipAddress} setIpAddress={setIpAddress} coordinates={coordinates} showMarker={showMarker} getIpData={getIpData} handleClear={handleClear} />
      </>

    )
  } else {
    return (
      <AppContent ipAddress={ipAddress} setIpAddress={setIpAddress} coordinates={coordinates} showMarker={showMarker} getIpData={getIpData} handleClear={handleClear} />
    )
  }
}

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));

export default App;
