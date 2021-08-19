import React from "react";
import Stats from "./Stats";
import Charts from "./Charts";

const ChartsContainer = () => {
    return (
        <div className="page2container">
            <div className="chartsContainer">
                <Stats />
                <Charts />
            </div>
        </div>
    )
}

export default ChartsContainer;