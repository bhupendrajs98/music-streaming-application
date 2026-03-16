import React from "react";
import { Home, Search, Heart, ListMusic, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1️⃣ Clear login info
    localStorage.removeItem("user"); // ya agar tumne token store kiya hai to remove karo
    sessionStorage.clear();          // optional
    // 2️⃣ Redirect to login page
    navigate("/login");
  };

  return (
    <div className="hidden md:flex flex-col fixed left-0 top-0 w-64 h-screen bg-zinc-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-8">🎵 Music App</h1>

      <div className="mb-10">
        <h2 className="text-sm text-gray-400 mb-4">MENU</h2>
        <ul className="space-y-4">
          <li onClick={() => navigate("/")} className="flex items-center gap-3 hover:text-green-400 cursor-pointer">
            <Home size={20} /> Home
          </li>
          <li onClick={() => navigate("/search")} className="flex items-center gap-3 hover:text-green-400 cursor-pointer">
            <Search size={20} /> Search
          </li>
          <li onClick={() => navigate("/likes")} className="flex items-center gap-3 hover:text-green-400 cursor-pointer">
            <Heart size={20} /> Likes
          </li>
          <li onClick={() => navigate("/playlist")} className="flex items-center gap-3 hover:text-green-400 cursor-pointer">
            <ListMusic size={20} /> Playlist
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-sm text-gray-400 mb-4">GENERAL</h2>
        <ul className="space-y-4">
          <li onClick={() => navigate("/settings")} className="flex items-center gap-3 hover:text-green-400 cursor-pointer">
            <Settings size={20} /> Settings
          </li>
          <li onClick={handleLogout} className="flex items-center gap-3 hover:text-red-400 cursor-pointer">
            <LogOut size={20} /> Logout
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;