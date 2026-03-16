import express from "express";
import dotenv from "dotenv";
import cors from "cors";   // 👈 ADD
import ConnectDb from "./config/db.js";

// ROUTES
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import songRoutes from "./routes/songRoutes.js";
import playlistRoutes from "./routes/playlistRoutes.js";

dotenv.config();

const app = express();

// CONNECT DATABASE
ConnectDb();

// MIDDLEWARE
app.use(cors());   // 👈 ADD THIS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// STATIC FOLDER
app.use("/upload", express.static("upload"));

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/playlists", playlistRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Spotify API Running 🎵");
});

// PORT
const PORT = process.env.PORT || 5999;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});