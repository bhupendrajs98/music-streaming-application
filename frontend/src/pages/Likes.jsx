import React from "react";
import SongCard from "../components/SongCard";

const Likes = () => {

  const likedSongs = [
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

  return (
    <div className="p-6 text-white">

      <h1 className="text-2xl font-bold mb-6">Liked Songs</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {likedSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>

    </div>
  );
};

export default Likes;