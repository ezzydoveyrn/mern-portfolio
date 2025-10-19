import React from "react";
import logo1 from "../assets/michael.png";
import logo2 from "../assets/stanbank.png";
import logo3 from "../assets/techhub.png";
import logo4 from "../assets/zion.png";

export default function Partners() {
  const logos = [logo1, logo2, logo3, logo4];

  return (
    <section
      id="partners"
      className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black py-10 overflow-hidden"
    >
      <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
        Trusted By
      </h2>

      {/* Infinite Scroll Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center gap-10 animate-scroll whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="partner logo"
              className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
