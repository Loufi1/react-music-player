import React from "react";
import PlaylistItem from "./playlistItem";

const Playlist = ({songs, setPlayingSong, audioRef, isPlaying}) => {
    return (
        <div className="playlist">
            {
                songs.map(song => {
                    return(
                        <PlaylistItem
                            key={song.id}
                            setPlayingSong={setPlayingSong}
                            song={song}
                            audioRef={audioRef}
                            isPlaying={isPlaying}
                        />
                    );
                })
            }
        </div>
    )
}

export default Playlist;