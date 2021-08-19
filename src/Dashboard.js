import React from "react";
import App from "./App";
import Sidebar from "./Sidebar";
import Stats from "./Stats";
import Charts from "./Charts";
import { Fragment } from "react";
import ChartsContainer from "./ChartsContainer";

const Dashboard = ({ handleHomeBtn, homeBtnClicked }) => {
    if (homeBtnClicked) {
        return (
            <App />
        )
    } else {
        return (
            <Fragment>
                <div className="page2container">
                    <Sidebar handleHomeBtn={handleHomeBtn} />
                    <div className="chartsContainer">
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