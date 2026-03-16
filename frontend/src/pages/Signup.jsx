// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { signup } from "../../api/api"; // backend API call

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      // call backend signup API
      const res = await signup({ name, email, password, role });
      console.log("Signup Success:", res.data);

      // save token & user in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Account created successfully!");

      // redirect based on role
      if (res.data.user.role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log("Signup Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-linear-to-tr from-green-900 to-black">
      <form
        onSubmit={handleSignup}
        className="bg-zinc-900 p-10 rounded-2xl w-96 shadow-2xl flex flex-col gap-6 border border-green-500"
      >
        <h1 className="text-4xl font-bold text-green-400 text-center mb-4 animate-pulse">
          🎵 Create Account
        </h1>

        {/* Name */}
        <div className="flex flex-col">
          <label className="text-gray-400 mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-green-500 outline-none transition duration-300"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-gray-400 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-green-500 outline-none transition duration-300"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col relative">
          <label className="text-gray-400 mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-green-500 outline-none pr-10 transition duration-300"
          />
          <span
            className="absolute right-3 top-9 cursor-pointer text-gray-400 hover:text-green-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        {/* Role Select as MCQ */}
        <div className="flex flex-col">
          <label className="text-gray-400 mb-1">Account Type</label>
          <div className="flex gap-4">
            {["user", "admin"].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`p-3 rounded-lg font-semibold transition-all duration-300
          ${role === r ? "bg-green-500 text-white" : "bg-zinc-800 text-gray-400 border border-zinc-700"}
          hover:bg-green-600 hover:text-white`}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 p-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
        >
          Sign Up
        </button>

        {/* Login Redirect */}
        <p className="text-gray-400 text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-400 cursor-pointer hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
