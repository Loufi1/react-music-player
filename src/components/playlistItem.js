import React from "react";

const PlaylistItem = ({song}) => {
    return (
        <div className="playlist-item">
            <img src={song.coverUrl}/>
            <div>
                <h2>{song.artist} - {song.name}</h2>
            </div>
        </div>
    )
}

export default PlaylistItem;