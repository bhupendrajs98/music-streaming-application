import Playlist from "../models/Playlist.js"


// CREATE PLAYLIST
const createPlaylist = async (req, res) => {
  try {

    const { name } = req.body

    const playlist = await Playlist.create({
      name,
      user: req.user.id,
      songs: []
    })

    res.status(201).json(playlist)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


// ADD SONG TO PLAYLIST
const addSongToPlaylist = async (req, res) => {
  try {

    const { playlistId, songId } = req.body

    const playlist = await Playlist.findById(playlistId)

    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" })
    }

    playlist.songs.push(songId)

    await playlist.save()

    res.json(playlist)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


// GET USER PLAYLISTS
const getUserPlaylists = async (req, res) => {
  try {

    const playlists = await Playlist
      .find({ user: req.user.id })
      .populate("songs")

    res.json(playlists)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


// DELETE PLAYLIST
const deletePlaylist = async (req, res) => {
  try {

    await Playlist.findByIdAndDelete(req.params.id)

    res.json({ message: "Playlist deleted successfully" })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


export {
  createPlaylist,
  addSongToPlaylist,
  getUserPlaylists,
  deletePlaylist
}