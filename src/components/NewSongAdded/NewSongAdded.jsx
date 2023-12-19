import React, { useState } from "react";
import TextField from "../TextField/TextField";

const NewSong = ({ onNewSong }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [yearReleased, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      artist,
      album,
    };
    onNewSong(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h4>Add Song</h4>
      <TextField lable="Title" value={title} onChange={setTitle} />
      <TextField lable="Artist" value={artist} onChange={setArtist} />
      <TextField lable="Genre" value={album} onChange={setAlbum} />
      <TextField lable="Album" value={genre} onChange={setGenre} />
      <TextField
        lable="Year Released"
        value={yearReleased}
        onChange={setYear}
      />
      <button type="submit">Add Song</button>
    </form>
  );
};

export default NewSong;
