import React from "react";
import DirectionsTransitIcon from '@material-ui/icons/DirectionsTransit';
// import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Stats = () => {
    return (
        <div className="stats">
            <div className="stats1">
                <p>Total Stations</p>
                <DirectionsTransitIcon style={{ fontSize: 50, color: "blue" }} />
                <p className="dataNum">6</p>
            </div>
            <div className="stats1">
                <p>Total Active Station</p>
                <TransferWithinAStationIcon style={{ fontSize: 50, color: "orange" }} />
                <p className="dataNum">4</p>
            </div>
            <div className="stats1">
                <p>Total Inactive Stations</p>
                <HighlightOffIcon style={{ fontSize: 50, color: "red" }} />
                <p className="dataNum">2</p>
            </div>
        </div>
    )
}

export default Stats;