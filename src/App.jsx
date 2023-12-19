import "./App.css";
import Header from "./components/Header/Header";
import SongList from "./components/SongList/SongList";
import SongInfo from "./components/SongInfo/SongInfo";
import NewSong from "./components/NewSongAdded/NewSongAdded";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7262/api/Songs");
      // console.log(response);
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in fetch songs request", error);
    }
  };

  // delete useEffect and initData
  useEffect(() => {
    fetchSongs();
  }, {});

  const handleNewSong = (newSong) => {
    const updatedSongs = [...songs, newSong];
    setSongs(updatedSongs);
  };

  const selectedSong = songs[activeIndex];

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <SongList
          songs={songs}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <SongInfo songObj={selectedSong} />
        <NewSong onNewSong={handleNewSong} />
      </div>
    </div>
  );
}

export default App;
