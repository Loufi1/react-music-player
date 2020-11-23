import React from "react";

const PlaylistItem = ({song, setPlayingSong, audioRef, isPlaying}) => {

    const playSong = async () => {
        await setPlayingSong(song);
        if (isPlaying) {
            audioRef.current.play();
        }
    }

    return (
        <div className="playlist-item" onClick={playSong}>
            <div>
                <h2>{song.artist} - {song.name}</h2>
            </div>
            <img alt='' src={song.coverUrl}/>
        </div>
    )
}

export default PlaylistItem;