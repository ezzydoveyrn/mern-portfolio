import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Auth from "../validationcheck/auth";
import MainDashboard from "../pages/MainDashboard";

function Dashboard() {
  Auth();
  return (
    <div className="flex w-full min-h-screen flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Header />
      <MainDashboard />
      <Footer />
    </div>
  );
}

export default Dashboard;
