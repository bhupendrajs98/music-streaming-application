import Song from "../models/Song.js";

//ADD SONG

const addSong = async (req, res) => {
  try {
    const { title, artist, album, audioUrl, coverImage } = req.body;
    const song = await Song.create({
      title,
      artist,
      album,
      audioUrl,
      coverImage,
    });
    res.status(201).json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// GET ALL SONG
const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//GET SINGLE SONG

const getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);

    if (!song) {
      return res.status(404).json({ message: "song not found" });
    }
    res.json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//DELETE SONG

const deleteSong = async (req, res) => {
  try {
    await Song.findByIdAndDelete(req.params.id);

    res.json({ message: "song deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export { addSong, getAllSongs, getSongById, deleteSong };
