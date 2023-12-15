import "./App.css";
import Header from "./components/Header/Header";
import SongList from "./components/SongList/SongList";
import SongInfo from "./components/SongInfo/SongInfo";
import NewSong from "./components/NewSongAdded/NewSongAdded";
import React, { useState } from "react";

function App() {
  const [songs, setSongs] = useState([]);

  const handleNewSong = (newSong) => {
    const updatedSongs = [...songs, newSong];
    setSongs(updatedSongs);
  };

  const selectedSong = {
    title: "Passion Fruit",
    artist: "Drake",
    genre: "rap",
    album: "More Life",
    releaseDate: 2017,
  };

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <SongList songs={songs} />
        <SongInfo songObj={selectedSong} />
        <NewSong onNewSong={handleNewSong} />
      </div>
    </div>
  );
}

export default App;
