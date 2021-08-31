import React from "react";
import Stats from "./Stats";
import Charts from "./Charts";
// import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
// import SubtitlesIcon from '@material-ui/icons/Subtitles';

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