import SongItem from "../SongItem/SongItem";

const SongList = ({ songs = [], activeIndex, setActiveIndex }) => {
  const songitems = songs.map((song, i) => (
    <SongItem
      key={song.title}
      title={song.title}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      index={i}
    />
  ));
  return (
    <div className="flex-item">
      <h4>My Songs</h4>
      <div>{songitems}</div>
    </div>
  );
};

export default SongList;
