import React, {useRef, useState} from "react";
import Player from "./components/player";
import Song from "./components/song";
import getMusics from "./utils/musics";

import './styles/app.scss';
import Playlist from "./components/playlist";

function App() {
    const [songs, setSongs] = useState(getMusics());
    const [playingSong, setPlayingSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    return (
        <div>
            <div className="app-body">
                <Song playingSong={playingSong}/>
                <Player
                    playingSong={playingSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    audioRef={audioRef}
                />
            </div>
            <Playlist
                setPlayingSong={setPlayingSong}
                songs={songs}
                audioRef={audioRef}
                isPlaying={isPlaying}
            />
        </div>
    );
}

export default App;
