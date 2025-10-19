import { Code2, Server, Globe, Palette } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code2 className="w-10 h-10 text-indigo-500" />,
      title: "Full-Stack Development",
      desc: "Building powerful web apps with the MERN stack — from responsive frontends to scalable backends.",
    },
    {
      icon: <Server className="w-10 h-10 text-indigo-500" />,
      title: "API Integration",
      desc: "Designing and integrating secure REST APIs and third-party services to make your app smarter.",
    },
    {
      icon: <Globe className="w-10 h-10 text-indigo-500" />,
      title: "Web Hosting & Deployment",
      desc: "Deploying applications with cloud platforms like Render, Vercel, and AWS for maximum performance.",
    },
    {
      icon: <Palette className="w-10 h-10 text-indigo-500" />,
      title: "UI/UX Design",
      desc: "Crafting sleek, user-friendly interfaces that combine clean design with functionality.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">My Services</h2>
        <p className="text-gray-400 mb-12">
          Here’s what I love to build and help brands grow through technology.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-2xl p-8 shadow-md hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
