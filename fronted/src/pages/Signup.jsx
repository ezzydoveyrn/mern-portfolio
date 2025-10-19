import axios from "axios";
import { ArrowLeft, LogInIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const token = localStorage.getItem("token");
    return token;
  });

  // Redirect automatically if user is already logged in
  useEffect(() => {
    if (isLoggedIn) {
      toast.success("You're already logged in");
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/users/signup",
        { email, password },
        { withCredentials: true }
      );
      toast.success(`Successfully registered: ${response.data.user.email}`);
      setTimeout(() => {
        toast("Login now", {
          duration: 4000,
          icon: <LogInIcon />,
        });
      }, 2000);

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <div className="w-full max-w-sm bg-gray-900/60 border border-[tomato] rounded-2xl shadow-2xl p-6 backdrop-blur-md">
        {/* Back Button */}
        <div className="flex items-center mb-4">
          <Link
            to="/"
            className="flex items-center text-[tomato] hover:text-[tomato] transition-colors"
          >
            <ArrowLeft className="mr-1 w-5 h-5" />
            <span className="text-sm">Back</span>
          </Link>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up 👋</h2>

        {/* Form */}
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col text-left">
            <label
              htmlFor="email"
              className="mb-1 text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-500 text-gray-100"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col text-left">
            <label
              htmlFor="password"
              className="mb-1 text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-500 text-gray-100"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 bg-[tomato] hover:bg-[tomato] text-white font-semibold rounded-md shadow-md transition-all duration-200"
          >
            Register
          </button>
        </form>

        {/* Bottom Text */}
        <p className="text-sm text-gray-400 text-center mt-6">
          Have an account?{" "}
          <Link
            to="/login"
            className="text-[tomato] hover:text-[tomato] font-semibold"
          >
            Sign In
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
