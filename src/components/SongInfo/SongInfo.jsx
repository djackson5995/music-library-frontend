const SongInfo = ({ title }) => {
  return (
    <div>
      <h4>{title}</h4>
      <div>
        <span>Artist</span>
        <span>Drake</span>
      </div>
      <div>
        <span>Genre</span>
        <span>Rap</span>
      </div>
      <div>
        <span>Album</span>
        <span>More Life</span>
      </div>
      <div>
        <span>Release Date </span>
        <span>2017</span>
      </div>
    </div>
  );
};

export default SongInfo;
