import React, { useEffect, useState } from "react";
import { getSongs } from "../../api/api";
import SongCard from "../components/SongCard";
import Player from "../components/Player";

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const res = await getSongs();
      if (res.data) {
        setSongs(
          res.data.map((song) => ({
            id: song._id,
            title: song.title,
            artist: song.artist,
            cover: song.coverImage,  // full URL already
            audio: song.audioUrl,    // full URL already
          }))
        );
      }
    } catch (err) {
      console.log("Error fetching songs:", err);
    }
  };

  return (
    <div className="p-6 text-white pb-28">
      <h1 className="text-2xl font-bold mb-6">Trending Songs</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {songs.length === 0 ? (
          <p className="text-gray-400 col-span-4 text-center">No songs available</p>
        ) : (
          songs.map((song) => (
            <SongCard key={song.id} song={song} setCurrentSong={setCurrentSong} />
          ))
        )}
      </div>

      {currentSong && <Player currentSong={currentSong} />}
    </div>
  );
};

export default Home;