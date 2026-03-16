// src/components/AdminSidebar.jsx
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // remove user from localStorage
    localStorage.removeItem("user");

    // redirect to login page
    navigate("/login");
  };

  // Menu items
  const menuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Users", path: "/admin/users" },
    { name: "Reports", path: "/admin/reports" },
    { name: "Settings", path: "/admin/settings" },
  ];

  return (
    <div className="w-64 bg-green-800 text-white p-4 min-h-screen flex flex-col">

      <h2 className="font-bold mb-6 text-lg">Admin Menu</h2>

      {/* Menu */}
      <ul className="flex flex-col gap-3 flex-1">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`block p-2 rounded hover:bg-green-700 transition-colors
              ${location.pathname === item.path ? "bg-green-900" : ""}
              `}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 p-2 rounded mt-4"
      >
        Logout
      </button>

    </div>
  );
};

export default AdminSidebar;