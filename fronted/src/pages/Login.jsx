import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import toast from "react-hot-toast";
import Footer from "../components/Footer";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [checkLoggedIn, setCheckLoggedIn] = useState(() => {
    const token = localStorage.getItem("token");
    return token;
  });

  // Redirect automatically if user is already logged in
  useEffect(() => {
    if (checkLoggedIn) {
      toast.success("You're already logged in");
      navigate("/dashboard");
    }
  }, [checkLoggedIn, navigate]);
  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Both fields are required!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/users/signin",
        { email, password },
        { withCredentials: true } // helps handle cookies/tokens if backend sends them
      );

      toast.success("Login successful!");
      console.log("Response:", response.data);
      setIsLoggedIn(true);

      // Example: Save JWT to localStorage
      localStorage.setItem("token", response.data.token);

      // Redirect user to dashboard or home
      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Invalid credentials or server error"
      );
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
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back 👋</h2>

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
            Log In
          </button>
        </form>

        {/* Bottom Text */}
        <p className="text-sm text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[tomato] hover:text-[tomato] font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
