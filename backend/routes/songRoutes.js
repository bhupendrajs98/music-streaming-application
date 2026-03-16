import express from "express";
import {
  addSong,
  getAllSongs,
  getSongById,
  deleteSong
} from "../controller/songController.js";

import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";

const router = express.Router();

// ADD SONG
router.post(
  "/upload",
  protect,
  upload.fields([
    { name: "audio", maxCount: 1 },
    { name: "cover", maxCount: 1 }
  ]),
  addSong
);

// GET ALL SONGS
router.get("/", getAllSongs);

// GET SINGLE SONG
router.get("/:id", getSongById);

// DELETE SONG
router.delete("/:id", protect, deleteSong);

export default router;