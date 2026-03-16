import React from "react";
import { Play } from "lucide-react";

const SongCard = ({ song, setCurrentSong }) => {
  return (
    <div
      onClick={() => setCurrentSong(song)}
      className="bg-zinc-900 p-3 rounded-lg hover:bg-zinc-800 
      transition-all duration-300 cursor-pointer group"
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-md">

        <img
          src={song.cover}
          alt={song.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrentSong(song);
          }}
          className="absolute bottom-2 right-2 bg-green-500 p-2 rounded-full
          shadow-lg opacity-0 group-hover:opacity-100
          translate-y-3 group-hover:translate-y-0
          transition-all duration-300"
        >
          <Play size={16} className="text-white" />
        </button>

      </div>

      <div className="mt-2">
        <h3 className="text-sm font-semibold truncate">{song.title}</h3>
        <p className="text-xs text-gray-400 truncate">{song.artist}</p>
      </div>
    </div>
  );
};

export default SongCard;