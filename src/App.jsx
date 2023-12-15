import "./App.css";
import Header from "./components/Header/Header";
import SongList from "./components/SongList/SongList";
import SongInfo from "./components/SongInfo/SongInfo";
function App() {
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
      <SongList />
      <SongInfo songObj={selectedSong} />
    </div>
  );
}

export default App;
