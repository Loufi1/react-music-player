import React, {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faPlayCircle,
    faPauseCircle,
    faStepForward,
    faStepBackward,
} from '@fortawesome/free-solid-svg-icons'
import getTime from "../utils/formatTime";

const Player = ({playingSong, isPlaying, setIsPlaying}) => {
    const audioRef = useRef(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const play = () => {
        if (isPlaying) {
            setIsPlaying(false);
            audioRef.current.pause();
        } else {
            setIsPlaying(true);
            audioRef.current.play();
        }
    }

    const updateTime = (e) => {
        setDuration(e.target.duration);
        setElapsedTime(e.target.currentTime);
    }

    const updateCursor = (e) => {
        audioRef.current.currentTime = e.target.value;
        console.log(e.target.value) // equal 15
        console.log(audioRef.current.currentTime) // equal 0
        setElapsedTime(e.target.value);
    }

    return (
        <div className="player">
            <div className="input">
                <p>{getTime(elapsedTime)}</p>
                <input onChange={updateCursor} min={0} max={duration} value={elapsedTime} type='range'/>
                <p>{getTime(duration)}</p>
            </div>
            <div className="control">
                <div className='circle'>
                    <FontAwesomeIcon size='2x' icon={faStepBackward} />
                </div>
                <div className="circle">
                    <FontAwesomeIcon onClick={play} size='2x' icon={isPlaying ? faPauseCircle : faPlayCircle} />
                </div>
                <div className="circle">
                    <FontAwesomeIcon size='2x' icon={faStepForward} />
                </div>
            </div>
            <audio onLoadedMetadata={updateTime} onTimeUpdate={updateTime} ref={audioRef} src={playingSong.url}/>
        </div>
    )
}

export default Player;