import React, { useState } from "react";
import SongCard from "../components/SongCard";
import Player from "../components/Player";

const Search = () => {

  const [search, setSearch] = useState("");
  const [currentSong, setCurrentSong] = useState(null);

  const songs = [
    {
      id: 1,
      title: "Kesariya",
      artist: "Arijit Singh",
      cover: "http://localhost:5999/upload/images/Kesariya_song_cover.jpg",
      audio: "http://localhost:5999/upload/audio/Kesariya.mp3",
    },
    {
      id: 2,
      title: "Tum Hi Ho",
      artist: "Arijit Singh",
      cover: "http://localhost:5999/upload/images/tum_hi_ho.jpeg",
      audio: "http://localhost:5999/upload/audio/Raataan.mp3",
    },
    {
      id: 3,
      title: "Raataan Lambiyan",
      artist: "Jubin Nautiyal",
      cover: "http://localhost:5999/upload/images/lambiya_ve.jpg",
      audio: "http://localhost:5999/upload/audio/tum.mp3"
    },
       {
      id: 4,
      title: "Thamma",
      artist: "thamma",
      cover: "http://localhost:5999/upload/images/bollywood.jpg",
      audio: "http://localhost:5999/upload/audio/thamma.mp3"
    },
    {
      id: 5,
      title: "Mardani 3",
      artist: "Unknown Artist",
      cover: "http://localhost:5999/upload/images/girl.jpg",
      audio: "http://localhost:5999/upload/audio/mardani3.mp3"
    },
    {
      id: 6,
      title: "pushpa",
      artist: "Unknown Artist",
      cover: "http://localhost:5999/upload/images/pushpa.jpg",
      audio: "http://localhost:5999/upload/audio/pushpa.mp3"
    },
    {
      id: 7,
      title: "Rockstar",
      artist: "Unknown Artist",
      cover: "http://localhost:5999/upload/images/rockstar.jpg",
      audio: "http://localhost:5999/upload/audio/rockstar.mp3"
    },
    {
      id: 8,
      title: "Jhoothi",
      artist: "Unknown Artist",
      cover: "http://localhost:5999/upload/images/jhoothi.jpg",
      audio: "http://localhost:5999/upload/audio/jhhothi.mp3"
    },
    {
      id: 9,
      title: "Khoobsurat",
      artist: "Unknown Artist",
      cover: "http://localhost:5999/upload/images/Khoobsurat.jpg",
      audio: "http://localhost:5999/upload/audio/khhosoorat.mp3"
    },
    {
      id: 10,
      title: "Kabir",
      artist: "Unknown Artist",
      cover: "http://localhost:5999/upload/images/kabir.jpg",
      audio: "http://localhost:5999/upload/audio/kabir.mp3"
    },
    {
      id: 11,
      title: "Sholey",
      artist: "Unknown Artist",
      cover: "http://localhost:5999/upload/images/sholey.jpg",
      audio: "http://localhost:5999/upload/audio/dhurandhar.mp3"
    },
    {
      id: 12,
      title: "pop",
      artist: "Unknown Artist",
      cover: "http://localhost:5999/upload/images/girl2.jpg",
      audio: "http://localhost:5999/upload/audio/tum.mp3"
    }
  ];

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 text-white pb-28">

      <h1 className="text-2xl font-bold mb-6">Search Songs</h1>

      <input
        type="text"
        placeholder="Search songs..."
        className="w-full p-3 mb-6 bg-zinc-800 rounded outline-none focus:ring-2 focus:ring-green-500"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredSongs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>

      {currentSong && <Player currentSong={currentSong} />}

    </div>
  );
};

export default Search;