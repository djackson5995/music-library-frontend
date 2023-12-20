import React, { useState } from "react";
import TextField from "../TextField/TextField";
import axios from "axios";

const NewSong = ({ onNewSong }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [yearReleased, setYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      artist,
      album,
      yearReleased,
      genre,
    };
    try {
      const response = await axios.post(
        "https://localhost:7262/api/Songs/",
        formData
      );
      if (response.status === 201) {
        onNewSong();
      }
    } catch (error) {
      console.warn("error submitting new song:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h4>Add Song</h4>
      <div className="p-2">
        <TextField lable="Title" value={title} onChange={setTitle} />
        <TextField lable="Artist" value={artist} onChange={setArtist} />
        <TextField lable="Genre" value={album} onChange={setAlbum} />
        <TextField lable="Album" value={genre} onChange={setGenre} />
        <TextField
          lable="Year Released"
          value={yearReleased}
          onChange={setYear}
          type="date"
        />
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" type="submit">
            Add Song
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewSong;
