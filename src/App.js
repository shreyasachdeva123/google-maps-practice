import React from "react";
import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import Map from "./Map";

const App = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [locationInfo, setLocationInfo] = useState({});
  const [coordinates, setCoordinates] = useState({ lat: 53.726669, lng: -127.647621 });

  function getIpData(e) {
    // e.preventdefault();
    fetch(`http://ip-api.com/json/${ipAddress}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLocationInfo({ ...data });
        setCoordinates({ "lat": data.lat, "lng": data.lon });
      })
      .catch((error) => console.log("There is an error!", error))
  }



  return (
    <div className="container" style={{ width: '100vw', height: '100vh', display: 'flex', displayDirection: 'row' }}>
      <div style={{ width: '50%', height: '100%' }}>
        <Map locationInfo={locationInfo} coordinates={coordinates} />
      </div>
      <form style={{ width: '50%', height: '100%' }}>
        <label htmlFor="inputField">Please enter your IP adress:</label>
        <input type="text" id="inputField" onChange={(e) => setIpAddress(e.target.value)} />
        <button type="button" onClick={getIpData}>Submit</button>
      </form>
    </div>
  )
}

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));

export default App;
