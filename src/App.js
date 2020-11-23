import React, {useState} from "react";
import Player from "./components/player";
import Song from "./components/song";
import getMusics from "./utils/musics";

import './styles/app.scss';
import Playlist from "./components/playlist";

function App() {
    const [songs, setSongs] = useState(getMusics());
    const [playingSong, setPlayingSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div>
            <div className="app-body">
                <Song playingSong={playingSong}/>
                <Player
                    playingSong={playingSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                />
            </div>
            <Playlist songs={songs}/>
        </div>
    );
}

export default App;
