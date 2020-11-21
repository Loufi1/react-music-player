import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faPlayCircle,
    faStepForward,
    faStepBackward,
} from '@fortawesome/free-solid-svg-icons'

const Player = () => {
    return (
        <div className="player">
            <div className="input">
                <p>0.0</p>
                <input type='range'/>
                <p>1.26</p>
            </div>
            <div className="control">
                <FontAwesomeIcon size='2x' icon={faStepBackward} />
                <FontAwesomeIcon size='2x' icon={faPlayCircle} />
                <FontAwesomeIcon size='2x' icon={faStepForward} />
            </div>
        </div>
    )
}

export default Player;