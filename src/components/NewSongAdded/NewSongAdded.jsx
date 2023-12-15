import React, { useState } from "react";

const NewSong = ({}) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");

  return (
    <form className="flex-item">
      <h4>Add Song</h4>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Artist</label>
        <input value={artist} onChange={(e) => setArtist(e.target.value)} />
      </div>
      <div>
        <label>Album</label>
        <input value={album} onChange={(e) => setAlbum(e.target.value)} />
      </div>
    </form>
  );
};

export default NewSong;
