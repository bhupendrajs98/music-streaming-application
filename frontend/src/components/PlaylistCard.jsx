import React from "react";

const PlaylistCard = ({ playlist }) => {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg hover:bg-zinc-800 transition cursor-pointer">

      <div className="w-full h-40 flex items-center justify-center bg-black rounded-md overflow-hidden">
        <img
          src={playlist.cover}
          alt={playlist.name}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="mt-3 font-semibold">{playlist.name}</h3>
      <p className="text-sm text-gray-400">{playlist.songs} Songs</p>

    </div>
  );
};

export default PlaylistCard;