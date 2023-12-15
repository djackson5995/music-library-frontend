const SongList = ({}) => {
  const songs = ["Passion Fruit", "She Will"];
  const songitems = songs.map((song) => <div>{song}</div>);
  return (
    <div>
      <h4>My Songs</h4>
      <div>{songitems}</div>
    </div>
  );
};

export default SongList;
