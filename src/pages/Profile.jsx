import React from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Heart,
  MapPin,
  Award,
  BookOpen,
  Target,
  Star,
  Clock,
} from "lucide-react";
import { useUser } from "../context/UserContext";

export default function Profile() {
  const { user } = useUser();

  const personalInfo = [
    {
      label: "Date of Birth",
      value: "April 4, 2005",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      label: "Phone Number",
      value: "+234 816 7782 930",
      icon: <Phone className="w-5 h-5" />,
    },
    {
      label: "Email",
      value: "janedoe@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      label: "Location",
      value: "Port Harcourt, NG",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      label: "Interest",
      value: "Frontend Development",
      icon: <Heart className="w-5 h-5" />,
    },
  ];

  const achievements = [
    { title: "Top Performer", date: "March 2025", color: "bg-cyan-600" },
    { title: "100 Days Streak", date: "Feb 2025", color: "bg-orange-500" },
    { title: "Fast Learner", date: "Jan 2025", color: "bg-indigo-500" },
  ];

  const courses = [
    { title: "Advanced React & TypeScript", progress: 85 },
    { title: "UI/UX Design Fundamentals", progress: 72 },
    { title: "Building APIs with NestJS", progress: 60 },
  ];

  const skills = [
    { skill: "React", level: 90 },
    { skill: "JavaScript", level: 85 },
    { skill: "CSS/Tailwind", level: 95 },
    { skill: "HTML", level: 100 },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-2xl p-10">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-4xl font-extrabold mb-2">
                Welcome back, {user && <span>{user.firstName}</span>}
              </h1>
              <p className="text-cyan-100 text-lg">
                You’ve completed{" "}
                <span className="font-semibold text-white">85%</span> of your
                monthly learning goal 🎯
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Target className="w-5 h-5" />
                <span className="font-semibold">85% Complete</span>
              </div>
            </div>
            <img
              className="w-40 h-40 rounded-full object-cover border-4 border-white/40 shadow-2xl mt-6 md:mt-0"
              src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2021/03/instructor-02-free-img.jpg"
              alt="Profile"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/30 mix-blend-overlay"></div>
        </div>

        {/* Main Profile Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Personal Info */}
          <div className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8 backdrop-blur-sm">
            {/* Profile Identity */}
            <div className="flex items-center gap-6 mb-8">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-xl">
                <User className="w-14 h-14" />
              </div>
              <div>
                {user && (
                  <h2 className="text-3xl font-bold text-gray-800">
                    {user.firstName} Doe
                  </h2>
                )}
                <p className="text-gray-600">Frontend Developer Student</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-cyan-700">
                  <Star className="w-4 h-4" />
                  <span>4.9 Learning Score</span>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Personal Information
            </h3>
            <div className="space-y-4">
              {personalInfo.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-2 rounded-lg text-indigo-600 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="text-gray-800 font-medium">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* About Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                About Me
              </h3>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100 leading-relaxed text-gray-700">
                Passionate frontend developer with a love for crafting seamless
                and responsive interfaces. Currently learning React, TypeScript,
                and NestJS while exploring full-stack development principles.
                Excited about building real-world projects that make a
                difference.
              </div>
            </div>
          </div>

          {/* Right Column - Stats, Achievements, Courses */}
          <div className="space-y-8">
            {/* Learning Stats */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="text-indigo-600" />
                <h3 className="text-lg font-bold text-gray-800">
                  Learning Overview
                </h3>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Courses Enrolled</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span>Courses Completed</span>
                  <span className="font-semibold text-green-600">8</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Study Hours</span>
                  <span className="font-semibold">142 hrs</span>
                </div>
              </div>
            </div>

            {/* Courses in Progress */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-indigo-600" />
                <h3 className="text-lg font-bold text-gray-800">
                  Courses in Progress
                </h3>
              </div>
              <div className="space-y-4">
                {courses.map((course, i) => (
                  <div key={i}>
                    <p className="font-medium text-gray-800 text-sm mb-1">
                      {course.title}
                    </p>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-gradient-to-r from-cyan-600 to-blue-400 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-yellow-600" />
                <h3 className="text-lg font-bold text-gray-800">
                  Achievements
                </h3>
              </div>
              <div className="space-y-3">
                {achievements.map((ach, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-xl text-white ${ach.color} hover:scale-[1.02] transition-transform`}
                  >
                    <p className="font-semibold text-sm">{ach.title}</p>
                    <p className="text-xs opacity-80">{ach.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Top Skills
              </h3>
              {skills.map((item, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">
                      {item.skill}
                    </span>
                    <span className="text-gray-500">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-gradient-to-r from-cyan-600 to-blue-400 h-2 rounded-full"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
