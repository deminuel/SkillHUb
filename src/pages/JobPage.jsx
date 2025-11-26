import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, CheckCircle } from "lucide-react";
import confetti from "canvas-confetti"; // optional for confetti burst

const JobPage = () => {
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Ivonix Studios" },
    { id: 2, title: "Backend Engineer", company: "TechNova" },
    { id: 3, title: "UI/UX Designer", company: "PixelCraft" },
  ];

  const userCertificates = [
    "Full Stack Web Development",
    "React & Modern JavaScript",
    "UI/UX Design Fundamentals",
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  const [cvFile, setCvFile] = useState(null);
  const [certificate, setCertificate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 800);
  };

  const handleClose = () => {
    setSubmitted(false);
    setCvFile(null);
    setCertificate("");
    setSelectedJob(null);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-cyan-700 mb-8">Available Jobs</h1>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition overflow-hidden group"
          >
            {/* Accent gradient bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-80"></div>

            {/* Card content */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-cyan-700 transition-colors mb-1">
                  {job.title}
                </h3>
                <p className="text-gray-500 mb-5 text-sm font-medium tracking-wide uppercase">
                  {job.company}
                </p>

                {/* Description placeholder (for visual feel only) */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Join our team to build cutting-edge experiences and grow your
                  career in a fast-paced, innovative environment.
                </p>
              </div>

              {/* Apply Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedJob(job)}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
              >
                Apply Now
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  →
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] md:w-[450px] relative overflow-hidden"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>

              <AnimatePresence mode="wait">
                {submitted ? (
                  // ✅ Success Screen
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center text-center space-y-4 py-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 120 }}
                    >
                      <CheckCircle className="w-16 h-16 text-green-500" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-green-600">
                      Application Submitted!
                    </h2>
                    <p className="text-gray-500 max-w-xs">
                      You’ve successfully applied for <b>{selectedJob.title}</b>{" "}
                      at <b>{selectedJob.company}</b>. We’ll reach out soon!
                    </p>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={handleClose}
                      className="mt-4 px-5 py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition"
                    >
                      Back to Jobs
                    </motion.button>
                  </motion.div>
                ) : (
                  // 📝 Application Form
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="text-2xl font-bold mb-1 text-cyan-700">
                      Apply for {selectedJob.title}
                    </h2>
                    <p className="text-gray-500 mb-5">{selectedJob.company}</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* CV Upload */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Upload Your CV
                        </label>
                        <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-cyan-400 rounded-xl cursor-pointer bg-cyan-50 hover:bg-cyan-100 transition">
                          <Upload className="w-6 h-6 text-cyan-600" />
                          <span className="text-sm text-cyan-700 mt-1">
                            {cvFile
                              ? cvFile.name
                              : "Click to upload or drag & drop"}
                          </span>
                          <input
                            type="file"
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => setCvFile(e.target.files[0])}
                          />
                        </label>
                      </div>

                      {/* Certificate Selection */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Choose a Certificate
                        </label>
                        <select
                          value={certificate}
                          onChange={(e) => setCertificate(e.target.value)}
                          className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                          <option value="">Select one</option>
                          {userCertificates.map((cert, i) => (
                            <option key={i} value={cert}>
                              {cert}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={!cvFile || !certificate}
                        className="w-full py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        Submit Application
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default JobPage;
