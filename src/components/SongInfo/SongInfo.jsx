const SongInfo = ({ songObj }) => {
  return (
    <div>
      <h4>{songObj.title}</h4>
      <div>
        <span>Artist</span>
        <span>{songObj.artist}</span>
      </div>
      <div>
        <span>Genre</span>
        <span>{songObj.genre}</span>
      </div>
      <div>
        <span>Album</span>
        <span>{songObj.album}</span>
      </div>
      <div>
        <span>Release Date </span>
        <span>{songObj.releaseDate}</span>
      </div>
    </div>
  );
};

export default SongInfo;
