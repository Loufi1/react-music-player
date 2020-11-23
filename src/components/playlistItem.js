import React from "react";

const PlaylistItem = ({song, setPlayingSong, audioRef, isPlaying}) => {

    const playSong = () => {
        if (isPlaying) {
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise.then(audio => {
                    audioRef.current.play();
                })
            }
        }
        setPlayingSong(song);
    }

    return (
        <div className="playlist-item" onClick={playSong}>
            <img alt='' src={song.coverUrl}/>
            <div>
                <h2>{song.artist} - {song.name}</h2>
            </div>
        </div>
    )
}

export default PlaylistItem;