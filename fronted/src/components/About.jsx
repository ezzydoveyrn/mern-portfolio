import { Link } from "react-router-dom";
import { Eye as ViewIcon } from "lucide-react";
import devImage from "../assets/dev.png"; // adjust path as needed

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg-pattern.jpg')" }} // optional background
    >
      {/* Left Text Content */}
      <div className="md:w-1/2 flex flex-col items-start text-white space-y-4">
        <h2 className="font-extrabold text-3xl md:text-4xl leading-snug">
          I'm{" "}
          <span className="text-[tomato] font-serif drop-shadow-lg">
            Ezekiel Ogana
          </span>
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Hey there! I’m{" "}
          <span className="text-white font-medium">Ezekiel M. Ogana</span>, but
          you might know me as{" "}
          <span className="text-[tomato]">Ezzy Dove YRN</span> or{" "}
          <span className="text-[tomato]">Ezzy Codes</span>.
        </p>

        <p className="text-gray-300 leading-relaxed">
          I’ve been working as a{" "}
          <span className="text-white font-medium">Full-Stack Developer</span>
          for over 3 years, specializing in the{" "}
          <span className="text-[tomato] font-semibold">MERN stack</span>, and
          I’ve also built solid projects using{" "}
          <span className="text-white">PHP</span>.
        </p>

        <p className="text-gray-300 leading-relaxed">
          I’m passionate about continuous learning and love collaborating with
          creative teams. Every project helps me grow, share ideas, and sharpen
          my craft.
        </p>

        <p className="text-gray-300 leading-relaxed">
          I’ve had the privilege of contributing to amazing projects like{" "}
          <span className="text-white font-semibold">Michael Chess Centre</span>
          , <span className="text-white font-semibold">Stan Bank Limited</span>,
          and others — each one shaping me into a better developer and problem
          solver.
        </p>

        <p className="text-gray-200 text-lg">
          🚀 Let’s build something meaningful together!
        </p>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 bg-[tomato] text-black font-semibold px-4 py-2 rounded-md hover:bg-white transition-all mt-4"
        >
          <ViewIcon className="w-5 h-5" />
          View All
        </Link>
      </div>

      {/* Right Image Content */}
      <div className="relative flex justify-center items-center">
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-pink-700 via-white to-pink-300 p-1 shadow-lg animate-pulse-slow">
          <img
            src={devImage}
            alt="Ezzy Ogana"
            className="w-full h-full rounded-full object-cover object-top border-4 border-gray-900"
          />
        </div>
      </div>
    </section>
  );
}
