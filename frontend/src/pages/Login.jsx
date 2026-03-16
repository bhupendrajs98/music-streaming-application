import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { login } from "../../api/api";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    try {

      console.log("Sending login:", { email, password });

      const res = await login({
        email,
        password,
      });

      console.log("Login response:", res.data);

      const user = res.data.user;

      // TOKEN SAVE
      localStorage.setItem("token", res.data.token);

      // USER SAVE
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login Successful");

      // ROLE BASED REDIRECT
      if (user.role === "admin") {

        navigate("/admin", { replace: true });

      } else {

        navigate("/", { replace: true });

      }

    } catch (error) {

      console.log("Login error:", error);

      if (error.response) {

        console.log("Backend message:", error.response.data);

        alert(error.response.data.message || "Login Failed");

      } else {

        alert("Server not reachable");

      }

    }

  };

  return (

    <div className="flex items-center justify-center h-screen bg-linear-to-tr from-green-900 to-black">

      <form
        onSubmit={handleLogin}
        className="bg-zinc-900 p-10 rounded-2xl w-96 shadow-2xl flex flex-col gap-6 border border-green-500"
      >

        <h1 className="text-4xl font-bold text-green-400 text-center mb-4">
          🎵 Music App
        </h1>

        {/* Email */}
        <div className="flex flex-col">

          <label className="text-gray-400 mb-1">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-green-500 outline-none"
          />

        </div>

        {/* Password */}
        <div className="flex flex-col relative">

          <label className="text-gray-400 mb-1">
            Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-green-500 outline-none w-full pr-10"
          />

          <span
            className="absolute right-3 top-9 cursor-pointer text-gray-400 hover:text-green-400"
            onClick={()=>setShowPassword(!showPassword)}
          >

            {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}

          </span>

        </div>

        {/* LOGIN BUTTON */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 p-3 rounded-lg font-semibold text-lg"
        >
          Login
        </button>

        {/* SIGNUP LINK */}
        <p className="text-gray-400 text-center text-sm">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="text-green-400 hover:underline"
          >
            Sign Up
          </Link>

        </p>

      </form>

    </div>

  );

};

export default Login;