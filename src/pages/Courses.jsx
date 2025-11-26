import React, { useState } from "react";
import {
  BookOpen,
  Search,
  Filter,
  PlayCircle,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const allCourses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      instructor: "Michael Aladejuyigbe",
      duration: "24h 30m",
      progress: 75,
      modules: 12,
      completed: 9,
      category: "Web Development",
      thumbnail:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "React & Modern JavaScript",
      instructor: "Sarah Johnson",
      duration: "18h 10m",
      progress: 90,
      modules: 8,
      completed: 7,
      category: "Frontend",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "John Doe",
      duration: "14h 20m",
      progress: 45,
      modules: 10,
      completed: 4,
      category: "Design",
      thumbnail:
        "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter = filter === "All" || course.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Courses</h1>
            <p className="text-gray-500">Keep learning, you’re doing amazing</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 outline-none bg-white"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 outline-none bg-white"
              >
                <option>All</option>
                <option>Web Development</option>
                <option>Frontend</option>
                <option>Design</option>
              </select>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <p className="text-center text-gray-500">No courses found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <article
                key={course.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Thumbnail */}
                <div className="relative h-40">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="font-bold text-lg text-gray-800 mb-1 line-clamp-1">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    By {course.instructor}
                  </p>

                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>

                  {/* Modules Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">
                        {course.completed} of {course.modules} modules
                      </span>
                      <span className="font-semibold text-cyan-600">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-gradient-to-r from-cyan-600 to-blue-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href="https://youtu.be/OpwnGiJB0wc?si=L879xSMLf9xML-yD"
                    target="_blank"
                  >
                    <button
                      className={`w-full flex items-center justify-center gap-2 py-2 rounded-xl font-medium text-white transition-all duration-300 ${
                        course.progress >= 100
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-cyan-600 hover:bg-cyan-700"
                      }`}
                    >
                      {course.progress >= 100 ? (
                        <>
                          <CheckCircle className="w-5 h-5" /> Completed
                        </>
                      ) : (
                        <>
                          <PlayCircle className="w-5 h-5" /> Continue Learning
                        </>
                      )}
                    </button>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
