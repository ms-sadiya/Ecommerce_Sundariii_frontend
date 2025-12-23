import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/Login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Logged In:", { email, password });
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left - Form Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
        >
          {/* Brand */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-extrabold">Sundarii</h1>
            <p className="text-sm text-gray-500 mt-1">
              Har Look Mein Khoobsurti ✨
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-xl font-semibold text-center mb-2">
            Welcome back
          </h2>
          <p className="text-sm text-center text-gray-500 mb-6">
            Sign in to continue your beauty journey
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••••"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            Sign In
          </button>

          {/* Footer */}
          <p className="text-center text-sm mt-6 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-black font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Right - Image Section */}
      <div className="hidden md:flex w-1/2 justify-center items-center">
        <img
          src={login}
          alt="Login"
          className="max-h-[80%] max-w-[80%] object-contain rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Login;
