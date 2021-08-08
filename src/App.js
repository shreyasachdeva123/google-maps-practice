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
  }

  return (
    <div className="container" style={{ width: '100vw', height: '100vh', display: 'flex', displayDirection: 'row' }}>
      <div style={{ width: '50%', height: '100%' }}>
        <Map coordinates={coordinates} firstTime={firstTime} />
      </div>
      <form style={{ width: '50%', height: '100%' }}>
        <label htmlFor="inputField">Please enter your IP adress:</label>
        <input type="text" id="inputField" onChange={(e) => setIpAddress(e.target.value)} />
        <button type="button" onClick={getIpData}>Submit</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
    </div>
  )
}

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));

export default App;
