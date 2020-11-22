import React from "react";

const Song = ({playingSong}) => {
    return (
        <div className="song">
            <img src={playingSong.coverUrl} alt=''/>
            <h1>{playingSong.artist} - {playingSong.name}</h1>
        </div>
    )
}

export default Song;