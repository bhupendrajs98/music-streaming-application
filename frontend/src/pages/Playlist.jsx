import React from "react";
import PlaylistCard from "../components/PlaylistCard";

const Playlist = () => {

  const playlists = [
    {
      id: 1,
      name: "Romantic Hits",
      songs: 10,
      cover: "http://localhost:5999/upload/images/pushpa.jpg",
    },
    {
      id: 2,
      name: "Workout Mix",
      songs: 10,
      cover: "http://localhost:5999/upload/images/kabir.jpg",
    },
    {
      id: 3,
      name: "Chill Vibes",
      songs: 10,
      cover: "http://localhost:5999/upload/images/sholey.jpg",
    },
    {
      id: 4,
      name: "Bollywood Top",
      songs: 15,
      cover: "http://localhost:5999/upload/images/pushpa.jpg",
    },
    {
      id: 5,
      name: "Party Songs",
      songs: 12,
      cover: "http://localhost:5999/upload/images/kabir.jpg",
    },
    {
      id: 6,
      name: "LoFi Mood",
      songs: 20,
      cover: "http://localhost:5999/upload/images/sholey.jpg",
    },
  ];

  return (
    <div className="p-6 text-white pb-28">

      <h1 className="text-2xl font-bold mb-6">Your Playlists</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="hover:scale-105 transition duration-300"
          >
            <PlaylistCard playlist={playlist} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Playlist;