import React, { useState } from "react";

const Settings = () => {

  const [name, setName] = useState("Bhupendra");
  const [email, setEmail] = useState("bhupendra@email.com");
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    alert("Settings Saved!");
  };

  return (
    <div className="p-6 text-white pb-28">

      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="max-w-xl bg-zinc-900 p-6 rounded-lg space-y-6">

        {/* Name */}
        <div>
          <label className="text-sm text-gray-400">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-3 bg-zinc-800 rounded outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-400">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-3 bg-zinc-800 rounded outline-none"
          />
        </div>

        {/* Dark Mode */}
        <div className="flex items-center justify-between">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        {/* Notifications */}
        <div className="flex items-center justify-between">
          <span>Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded font-semibold"
        >
          Save Settings
        </button>

      </div>

    </div>
  );
};

export default Settings;