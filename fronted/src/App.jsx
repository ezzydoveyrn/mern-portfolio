import toast from "react-hot-toast";
import Footer from "./components/Footer";
import { Link} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
      const token = localStorage.getItem("token");
      return token;
    });
    const navigate = useNavigate();
  
    // Redirect automatically if user is already logged in
    useEffect(() => {
      if (isLoggedIn) {
        toast.success("Welcome back!");
        navigate("/dashboard");
      }else{
        navigate("/");
      }
    }, [isLoggedIn, navigate]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 text-center">
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
        Build Smarter <span className="text-[tomato]">Web Experiences</span>
      </h1>

      <p className="max-w-xl text-gray-300 text-lg mb-8">
        I'm a MERN Stack Developer with 3+ years of experience crafting secure,
        scalable, and user-focused web applications.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          className="px-8 py-3 bg-[tomato] hover:bg-[tomato] rounded-2xl font-semibold transition duration-300 shadow-lg"
          to={"/login"}
        >
          Get Started
        </Link>
        <Link
          className="px-8 py-3 border border-gray-400 hover:border-indigo-500 hover:text-indigo-400 rounded-2xl font-semibold transition duration-300"
          to={"/projects"}
        >
          View Projects
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default App;
