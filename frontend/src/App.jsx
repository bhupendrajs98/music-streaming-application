import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar"; // user sidebar
import AdminSidebar from "../admin/AdminSidebar"; // admin sidebar

import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Search from "./pages/Search";
import Playlist from "./pages/Playlist";
import Settings from "./pages/Setting";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "../admin/Dashboard";
function Layout({ children }) {
  const location = useLocation();

  const hideSidebarRoutes = ["/login", "/signup"];
  const showSidebar = !hideSidebarRoutes.includes(location.pathname);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex bg-black min-h-screen text-white">
      
      {/* Sidebar */}
      {showSidebar && (
        user?.role === "admin" ? <AdminSidebar /> : <Sidebar />
      )}

      {/* Main Content */}
      <div
        className={
          showSidebar
            ? user?.role === "admin"
              ? "flex-1 overflow-y-auto"   // admin me margin nahi
              : "ml-64 flex-1 overflow-y-auto" // user me margin
            : "flex-1"
        }
      >
        {children}
      </div>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* User pages */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/settings" element={<Settings />} />

          {/* Auth pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Admin pages */}
          <Route path="/admin" element={<AdminDashboard />} />
          {/* <Route path="/admin/users" element={<div>Admin Users</div>} />
          <Route path="/admin/reports" element={<div>Admin Reports</div>} />
          <Route path="/admin/settings" element={<div>Admin Settings</div>} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;