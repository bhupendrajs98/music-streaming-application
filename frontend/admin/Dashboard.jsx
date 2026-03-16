import React, { useEffect, useState } from "react";
import { getSongs, getPlaylists, getProfile, uploadSong, deleteSong } from "../api/api";

const Dashboard = () => {

  const [songs, setSongs] = useState(0);
  const [songList, setSongList] = useState([]);
  const [playlists, setPlaylists] = useState(0);
  const [userName, setUserName] = useState("");

  const [showUpload, setShowUpload] = useState(false);

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [coverImage, setCoverImage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {

      const songsRes = await getSongs();
      setSongs(songsRes.data.length);
      setSongList(songsRes.data);

      const playlistRes = await getPlaylists();
      setPlaylists(playlistRes.data.length);

      const profileRes = await getProfile();
      setUserName(profileRes.data.name);

    } catch (error) {
      console.log("Dashboard Error:", error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    try {

      const data = {
        title,
        artist,
        album,
        audioUrl,
        coverImage
      };

      await uploadSong(data);

      alert("Song Uploaded Successfully");

      setShowUpload(false);

      setTitle("");
      setArtist("");
      setAlbum("");
      setAudioUrl("");
      setCoverImage("");

      fetchData();

    } catch (error) {
      console.log("Upload Error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {

      await deleteSong(id);

      alert("Song Deleted Successfully");

      fetchData();

    } catch (error) {
      console.log("Delete Error:", error);
    }
  };

  return (
    <div className="p-8 w-full">

      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">
        Welcome Admin {userName}
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-gray-400">Total Songs</h2>
          <p className="text-3xl font-bold mt-2">{songs}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-gray-400">Total Playlists</h2>
          <p className="text-3xl font-bold mt-2">{playlists}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-gray-400">Total Users</h2>
          <p className="text-3xl font-bold mt-2">--</p>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="mt-10 bg-gray-900 p-6 rounded-lg">

        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

        <button
          onClick={() => setShowUpload(true)}
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
        >
          Upload Song
        </button>

      </div>

      {/* Upload Modal */}
      {showUpload && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">

          <form
            onSubmit={handleUpload}
            className="bg-gray-900 p-6 rounded-lg w-96"
          >

            <h2 className="text-xl mb-4">Upload Song</h2>

            <input
              type="text"
              placeholder="Song Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 mb-3 bg-gray-800 rounded"
              required
            />

            <input
              type="text"
              placeholder="Artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              className="w-full p-2 mb-3 bg-gray-800 rounded"
              required
            />

            <input
              type="text"
              placeholder="Album"
              value={album}
              onChange={(e) => setAlbum(e.target.value)}
              className="w-full p-2 mb-3 bg-gray-800 rounded"
            />

            <input
              type="text"
              placeholder="Audio URL"
              value={audioUrl}
              onChange={(e) => setAudioUrl(e.target.value)}
              className="w-full p-2 mb-3 bg-gray-800 rounded"
              required
            />

            <input
              type="text"
              placeholder="Cover Image URL"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              className="w-full p-2 mb-3 bg-gray-800 rounded"
              required
            />

            <div className="flex gap-3 mt-4">

              <button
                type="submit"
                className="bg-green-600 px-4 py-2 rounded"
              >
                Upload
              </button>

              <button
                type="button"
                onClick={() => setShowUpload(false)}
                className="bg-red-600 px-4 py-2 rounded"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>
      )}

      {/* Uploaded Songs List */}
      <div className="mt-10">

        <h2 className="text-xl font-semibold mb-4">Uploaded Songs</h2>

        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">

          {songList.length === 0 ? (
            <p className="text-gray-400">No songs uploaded</p>
          ) : (

            <table className="w-full text-left">

              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="py-2">Cover</th>
                  <th>Title</th>
                  <th>Artist</th>
                  <th>Album</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {songList.map((song) => (

                  <tr key={song._id} className="border-b border-gray-800">

                    <td className="py-3">
                      <img
                        src={song.coverImage}
                        alt={song.title}
                        className="w-12 h-12 rounded object-cover"
                      />
                    </td>

                    <td>{song.title}</td>

                    <td>{song.artist}</td>

                    <td>{song.album || "-"}</td>

                    <td>
                      <button
                        onClick={() => handleDelete(song._id)}
                        className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          )}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;