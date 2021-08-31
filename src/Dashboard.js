import React from "react";
import App from "./App";
import Sidebar from "./Sidebar";
import Stats from "./Stats";
import Charts from "./Charts";
import { Fragment } from "react";
import ChartsContainer from "./ChartsContainer";
import Payments from "./Payments";

const Dashboard = ({ handleHomeBtn, homeBtnClicked, array, handleMenuItemClick, paymentsClicked, dashboardClicked }) => {
    if (homeBtnClicked) {
        return (
            <App />
        )
    } else if (paymentsClicked) {
        return (
            <Payments handleHomeBtn={handleHomeBtn} homeBtnClicked={homeBtnClicked} array={array} handleMenuItemClick={handleMenuItemClick} dashboardClicked={dashboardClicked} />
        )
    } else {
        return (
            <Fragment>
                <div className="pageContainer">
                    <Sidebar handleHomeBtn={handleHomeBtn} homeBtnClicked={homeBtnClicked} array={array} handleMenuItemClick={handleMenuItemClick} />
                    <div className="chartsWrapper">
                        <Stats />
                        <Charts />
                    </div>
                </div>
                <ChartsContainer />
                <ChartsContainer />
                <ChartsContainer />
            </Fragment>
        )
    }
}

export default Dashboard;