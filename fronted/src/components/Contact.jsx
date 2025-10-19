import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400">
          Got a project in mind or just want to say hi? Let’s connect and make
          something amazing together.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-center space-x-4 bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all">
            <Mail className="w-8 h-8 text-indigo-500" />
            <div className="text-left">
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-400">ezzycodes254@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all">
            <Phone className="w-8 h-8 text-indigo-500" />
            <div className="text-left">
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-400">+254 702 491 550</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all">
            <MapPin className="w-8 h-8 text-indigo-500" />
            <div className="text-left">
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-gray-400">Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-800 rounded-2xl p-8 shadow-lg space-y-6 hover:bg-gray-750 transition-all">
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-indigo-500 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-indigo-500 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-indigo-500 text-white"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-all"
          >
            <Send className="w-5 h-5" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
