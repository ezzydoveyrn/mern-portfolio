import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import Auth from "../validationcheck/auth.js";
import { useNavigate, Link } from "react-router-dom";

function Profile() {
  Auth(); // ✅ Ensures user is logged in
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const decoded = jwtDecode(token);
    const userId = decoded.id || decoded._id;

    async function fetchUser() {
      try {
        const res = await axios.get(`https://mern-portfolio-lvmy.onrender.com/users/${userId}`);
        setEmail(res.data.email);
        toast.success("User fetched successfully");
      } catch (error) {
        console.error("Error fetching user:", error);
        toast.error("Error fetching user");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 min-h-screen items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-4 text-[tomato]">My Profile</h1>

        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : (
          <>
            <div className="bg-gray-900 p-4 rounded-lg mb-4">
              <p className="text-gray-300">Email:</p>
              <p className="text-white font-semibold">{email}</p>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <button
                onClick={handleLogout}
                className="bg-[tomato] text-black px-4 py-2 rounded-lg hover:bg-white transition-all font-medium"
              >
                Logout
              </button>

              <Link
                to="/"
                className="border border-[tomato] text-[tomato] px-4 py-2 rounded-lg hover:bg-[tomato] hover:text-black transition-all font-medium"
              >
                Back Home
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
