import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const token = localStorage.getItem("token");
    return token;
  });
  const navigate = useNavigate();

  // Redirect automatically if user is already logged in
  useEffect(() => {
    if (!isLoggedIn) {
      toast.error("Login to continue");
      navigate("/");
      return false
    }
  }, [isLoggedIn, navigate]);
}

export default Auth;
