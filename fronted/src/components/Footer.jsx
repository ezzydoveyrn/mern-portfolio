import React from 'react'

function Footer() {
  return (
    <div className="mt-16 opacity-50 w-full flex justify-center items-center h-4">
      <p className="text-sm text-white">
        © {new Date().getFullYear()} Ezzy Dove | All Rights Reserved
      </p>
    </div>
  );
}

export default Footer