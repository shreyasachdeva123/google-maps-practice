import React from "react";
import { StrictMode, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import AppContent from "./AppContent";
import Dashboard from "./Dashboard";


const App = () => {
  const [stationsData, setStationsData] = useState([]);
  const [coordinates] = useState({ lat: 49.2831, lng: -123.1157 });
  const [stationName, setStationName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    status: "",
    technicianDetails: ""
  });
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [homeBtnClicked, setHomeBtnClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      getStationInfo();
      console.log("mounted");
    }, 2000);
    return () => { clearInterval(interval) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  function handleStatusChange(e) {
    if (formData.status === "Select" || formData.technicianDetails === "" || formData.name === "") {
      setShowModal(true);
    }
    fetch(`https://morning-dusk-47149.herokuapp.com/api/locations/${e.target.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ technicianDetails: formData.technicianDetails, status: formData.status })
    })
      .then((response) => response.json())
      .then((data) => {
        for (var i = 0; i < stationsData.length; i++) {
          if (stationsData[i].id === data.results.id) {
            stationsData.splice(i, 1, data.results);
            setStationsData([...stationsData]);
          }
        }
      }
      ).catch((error) => console.log(error))
  }

  function handleDashboardClick() {
    setDashboardOpen(true);
  }

  function getStationInfo() {
    fetch("https://morning-dusk-47149.herokuapp.com/api/locations/", {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
      .then((response) => response.json())
      .then((data) => {
        setStationsData([...data.results])
      })
  }

  function handleHomeBtn() {
    setHomeBtnClicked(true)
  }

  function handleClickMarker(e) {
    setStationName(e.target.id);
    let currentStation = stationsData.filter((station) => station.name === e.target.id);
    setFormData({ ...currentStation[0] });
  }

  function handleClose(e) {
    for (var i = 0; i < stationsData.length; i++) {
      if (stationsData[i].id === parseInt(e.target.id)) {
        let prevFormData = stationsData[i];
        setFormData({ ...prevFormData });
      }
    }
  }

  if (dashboardOpen) {
    return (
      <Dashboard handleHomeBtn={handleHomeBtn} homeBtnClicked={homeBtnClicked} />
    )
  }
  else {
    return (

      <AppContent coordinates={coordinates}
        stationsData={stationsData}
        handleClickMarker={handleClickMarker}
        stationName={stationName}
        handleStatusChange={handleStatusChange}
        formData={formData}
        setFormData={setFormData}
        handleClose={handleClose}
        showModal={showModal}
        setShowModal={setShowModal}
        handleDashboardClick={handleDashboardClick}
      />

    )

  }

}

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));

export default App;

