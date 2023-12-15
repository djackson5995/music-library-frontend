const SongInfo = ({ title, artist, genre, album, releaseDate }) => {
  return (
    <div>
      <h4>{title}</h4>
      <div>
        <span>Artist</span>
        <span>{artist}</span>
      </div>
      <div>
        <span>Genre</span>
        <span>{genre}</span>
      </div>
      <div>
        <span>Album</span>
        <span>{album}</span>
      </div>
      <div>
        <span>Release Date </span>
        <span>{releaseDate}</span>
      </div>
    </div>
  );
};

export default SongInfo;
