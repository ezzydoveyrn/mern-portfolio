import { Github, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import michaelchess from "../assets/michaelchess.png";
import stanbanklimited from "../assets/stanbanklimited.png";

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Michael Chess Centre",
      desc: "A web platform for managing chess events, tournaments, and player rankings with real-time updates.",
      tech: ["React", "Node.js", "MongoDB"],
      image: michaelchess,
      live: "https://michaelchesscentre.com",
      code: "https://github.com/ezzyc0des/michael-chess-centre",
    },
    {
      title: "Stan Bank Limited",
      desc: "A secure online banking portal for customer account management and loan applications.",
      tech: ["Express", "MongoDB", "JWT Auth"],
      image: stanbanklimited,
      live: "#",
      code: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white py-20 px-6 min-h-screen"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">My Projects</h2>
        <p className="text-gray-400">
          A few highlights of what I’ve been building lately 🚀
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(255,99,71,0.3)] transition-all duration-500"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-xl font-bold text-[tomato] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.desc}</p>

              <div className="flex gap-3 flex-wrap justify-center text-sm mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 px-2 py-1 rounded-md text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[tomato] text-black px-4 py-2 rounded-md font-medium hover:bg-white transition-all"
                  >
                    <Globe className="w-5 h-5" /> Live
                  </a>
                )}
                {project.code !== "#" && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-[tomato] text-[tomato] px-4 py-2 rounded-md hover:bg-[tomato] hover:text-black transition-all"
                  >
                    <Github className="w-5 h-5" /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="w-full flex justify-center mt-16">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-[tomato] text-black rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
        >
          ← Back to Home
        </button>
      </div>
    </section>
  );
}
