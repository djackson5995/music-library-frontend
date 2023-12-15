const SongItem = ({ title }) => {
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <div className="song-item">
      <span>{title}</span>
      <button onClick={handleClick}>Favorite</button>
    </div>
  );
};

export default SongItem;
