import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5999/api",
});

// TOKEN AUTO SEND (IMPORTANT)
API.interceptors.request.use((req) => {

  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;

});

// AUTH
export const signup = (data) => API.post("/auth/register", data);
export const login = (data) => API.post("/auth/login", data);

// USER
export const getProfile = () => API.get("/users/profile");

// SONGS
export const getSongs = () => API.get("/songs");

export const uploadSong = (data) =>
  API.post("/songs/upload", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteSong = (id) => API.delete(`/songs/${id}`);

// PLAYLIST
export const createPlaylist = (data) => API.post("/playlists", data);
export const getPlaylists = () => API.get("/playlists");

export default API;