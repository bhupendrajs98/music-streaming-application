import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

const Player = ({ currentSong }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateProgress = () => {
    const duration = audioRef.current.duration;
    const current = audioRef.current.currentTime;
    setProgress((current / duration) * 100);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-800 px-6 py-3 flex items-center justify-between">

      {/* LEFT SONG INFO */}
      <div className="flex items-center gap-3 w-1/4">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className="w-14 h-14 rounded"
        />
        <div>
          <h3 className="text-sm font-semibold">{currentSong.title}</h3>
          <p className="text-xs text-gray-400">{currentSong.artist}</p>
        </div>
      </div>

      {/* CENTER CONTROLS */}
      <div className="flex flex-col items-center w-2/4">

        <div className="flex items-center gap-6 text-white text-lg">

          <button>
            <FaStepBackward />
          </button>

          <button
            onClick={togglePlay}
            className="bg-white text-black p-3 rounded-full"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <button>
            <FaStepForward />
          </button>

        </div>

        {/* PROGRESS BAR */}
        <input
          type="range"
          value={progress}
          onChange={(e) => {
            const newTime =
              (e.target.value / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
            setProgress(e.target.value);
          }}
          className="w-full mt-2"
        />

      </div>

      {/* RIGHT VOLUME */}
      <div className="w-1/4 flex justify-end">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          onChange={(e) => (audioRef.current.volume = e.target.value)}
        />
      </div>

      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={updateProgress}
      />

    </div>
  );
};

export default Player;