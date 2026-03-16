import express from "express"
import {
  createPlaylist,
  addSongToPlaylist,
  getUserPlaylists,
  deletePlaylist
} from "../controller/playlistController.js"

import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

// CREATE PLAYLIST
router.post("/", protect, createPlaylist)

// GET USER PLAYLISTS
router.get("/", protect, getUserPlaylists)

// ADD SONG TO PLAYLIST
router.post("/add-song", protect, addSongToPlaylist)

// DELETE PLAYLIST
router.delete("/:id", protect, deletePlaylist)

export default router