import { AnimatePresence, motion } from "framer-motion";
import { X, Upload } from "lucide-react";
import React, { useState } from "react";

const userCertificates = [
  "Full Stack Web Development",
  "React & Modern JavaScript",
  "UI/UX Design Fundamentals",
];

const Trial = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [cvFile, setCvFile] = useState(null);
  const [certificate, setCertificate] = useState("");

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
    <>
      <p onClick={setSelectedJob}>PAY NOW</p>
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
                        onClick={setSelectedJob()}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={!cvFile || !certificate}
                        className="w-full py-3 bg-red-900 text-white font-semibold rounded-lg hover:bg-cyan-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        I have sent the money
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Trial;
