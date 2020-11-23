import React from "react";
import PlaylistItem from "./playlistItem";

const Playlist = ({songs}) => {
    return (
        <div className="playlist">
            {
                songs.map(song => {
                    return(
                        <PlaylistItem song={song}/>
                    );
                })
            }
        </div>
    )
}

export default Playlist;