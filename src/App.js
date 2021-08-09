import React from "react";
import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import Map from "./Map";

const App = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 53.726669, lng: -127.647621 });
  const [firstTime, setFirstTime] = useState(false);

  function getIpData(e) {
    if (ipAddress === "") {
      alert("Please enter an IP address.");
      setFirstTime(false);
    } else {
      fetch(`http://ip-api.com/json/${ipAddress}`
      ).then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCoordinates({ "lat": data.lat, "lng": data.lon });
        })
        .catch((error) => console.log("There is an error!", error))
      setFirstTime(true);
    }
  }

  function handleClear() {
    setFirstTime(false);
    setIpAddress("");
  }

  return (
    <div className="wrapper">
      <div className="navbar">
        <p>AccessView SmartConsole</p>
      </div>
      <div className="container">
        <div className="mapContainer">
          <Map coordinates={coordinates} firstTime={firstTime} />
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

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));

export default App;
