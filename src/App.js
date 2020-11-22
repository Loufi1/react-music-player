import React, {useState} from "react";
import Player from "./components/player";
import Song from "./components/song";
import getMusics from "./utils/musics";

import './styles/app.scss';

function App() {
    const [songs, setSongs] = useState(getMusics());
    const [playingSong, setPlayingSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div>
            <Song playingSong={playingSong}/>
            <Player
                playingSong={playingSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
            />
        </div>
    );
}

export default App;
