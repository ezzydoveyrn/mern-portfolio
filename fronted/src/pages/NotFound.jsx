import React from 'react'
import { useNavigate } from 'react-router-dom';


function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 min-h-screen items-center justify-center">
      <div className="w-[300px] h-[300px] #ffffff73 rounded-md flex justify-center items-center">
        <h1 className="font-extrabold text-pretty text-3xl ">Page Not Found</h1>
        <button onClick={()=> navigate("/dashboard")}>
          HOME
        </button>
      </div>
    </div>
  );
}

export default NotFound