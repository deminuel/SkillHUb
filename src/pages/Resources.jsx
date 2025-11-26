import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Download } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "HTML Fundamentals",
      file: "/public/html.pdf",
      color: "from-pink-500 to-red-500",
    },
    {
      id: 2,
      title: "CSS Mastery",
      file: "/public/css.pdf",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "JavaScript Deep Dive",
      file: "/public/javascript.pdf",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 4,
      title: "React for Developers",
      file: "/public/react.pdf",
      color: "from-indigo-500 to-purple-500",
    },

  ];

  const [selected, setSelected] = useState(resources[0]);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 lg:flex gap-8">
      {/* Sidebar */}
      <aside className="lg:w-1/4 mb-6 lg:mb-0 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyan-600" /> Resources
        </h2>
        <div className="space-y-3">
          {resources.map((res) => (
            <motion.button
              key={res.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(res)}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium transition ${
                selected.id === res.id
                  ? "bg-gradient-to-r text-white " + res.color
                  : "bg-gray-50 hover:bg-gray-100 text-gray-700"
              }`}
            >
              {res.title}
            </motion.button>
          ))}
        </div>
      </aside>

      {/* Viewer Section */}
      <div className="lg:flex-1 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h1 className="text-lg md:text-2xl font-bold text-cyan-700">
            {selected.title}
          </h1>
          <a
            href={selected.file}
            download
            className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition"
          >
            <Download size={18} />{" "}
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <iframe
              src={selected.file}
              title={selected.title}
              frameBorder="0"
              width="100%"
              height="700px"
              className="rounded-b-2xl"
            ></iframe>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Resources;
