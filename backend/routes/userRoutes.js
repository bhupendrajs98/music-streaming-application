import express from "express";
import { getUserProfile, updateUserProfile } from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET USER PROFILE
router.get("/profile", protect, getUserProfile);

// UPDATE PROFILE
router.put("/profile", protect, updateUserProfile);

export default router;