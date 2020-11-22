import React, {useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faPlayCircle,
    faPauseCircle,
    faStepForward,
    faStepBackward,
} from '@fortawesome/free-solid-svg-icons'

const Player = ({playingSong, isPlaying, setIsPlaying}) => {
    const audioRef = useRef(null);

    const play = () => {
        if (isPlaying) {
            setIsPlaying(false);
            audioRef.current.pause();
        } else {
            setIsPlaying(true);
            audioRef.current.play();
        }
    }

    return (
        <div className="player">
            <div className="input">
                <p>0.0</p>
                <input type='range'/>
                <p>1.26</p>
            </div>
            <div className="control">
                <FontAwesomeIcon size='2x' icon={faStepBackward} />
                <FontAwesomeIcon onClick={play} size='2x' icon={isPlaying ? faPauseCircle : faPlayCircle} />
                <FontAwesomeIcon size='2x' icon={faStepForward} />
            </div>
            <audio ref={audioRef} src={playingSong.url}/>
        </div>
    )
}

export default Player;