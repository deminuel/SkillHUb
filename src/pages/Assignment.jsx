import React, { useState } from "react";

const Assignment = () => {
  const [link, setLink] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!link.trim()) {
      alert("Please enter a valid link before submitting.");
      return;
    }

    setSubmitted(true);
    setLink("");
    alert("✅ Submission successful!");
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md border border-gray-100 text-center transition-transform duration-300 hover:scale-[1.02]">
        <h1 className="text-2xl font-semibold text-cyan-700 mb-6">
          📄 Submit Your Assignment
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5"
        >
          <input
            required
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Paste your assignment link here"
            className="w-80 md:w-96 px-4 py-3 border-2 border-cyan-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-700 placeholder-gray-400"
          />

          <button
            type="submit"
            className="px-6 py-2 bg-[#007991] hover:bg-cyan-700 text-white rounded-lg shadow-md font-medium transition"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <p className="mt-6 text-green-600 font-medium">
            🎉 Your assignment has been submitted successfully!
          </p>
        )}
      </div>
    </section>
  );
};

export default Assignment;
