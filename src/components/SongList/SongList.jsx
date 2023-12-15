import SongItem from "../SongItem/SongItem";

const SongList = ({ songs = [] }) => {
  const songitems = songs.map((song) => (
    <SongItem key={song.title} title={song.title} />
  ));
  return (
    <div className="flex-item">
      <h4>My Songs</h4>
      <div>{songitems}</div>
    </div>
  );
};

export default SongList;
