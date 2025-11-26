import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Calendar,
  BookOpen,
  TrendingUp,
  Award,
  Clock,
  ChevronRight,
  Target,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedDay, setSelectedDay] = useState("Mon");

  // Progress data for line chart
  const progressData = [
    { month: "Jul", progress: 20 },
    { month: "Aug", progress: 35 },
    { month: "Sep", progress: 50 },
    { month: "Oct", progress: 65 },
    { month: "Nov", progress: 85 },
  ];

  // Course completion data
  const courseData = [
    { name: "HTML", completion: 100 },
    { name: "React", completion: 80 },
    { name: "JavaScript", completion: 90 },
  ];

  // Time spent data
  const timeData = [
    { name: "HTML", value: 25 },
    { name: "React", value: 30 },
    { name: "JavaScript", value: 35 },
  ];

  const COLORS = ["#007991", "#FF9635", "#8b5cf6"];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const schedule = [
    { time: "9:00 AM", course: "Frontend Programming", duration: "2h" },
    { time: "11:00 AM", course: "JavaScript Advanced", duration: "1.5h" },
    { time: "2:00 PM", course: "React Fundamentals", duration: "2h" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome Header */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 p-8 text-white shadow-2xl">
          {/* Decorative shapes */}
          <div className="absolute inset-0">
            <div className="absolute w-48 h-48 bg-white/10 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
            <div className="absolute w-64 h-64 bg-blue-400/10 rounded-full blur-3xl bottom-0 right-0"></div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between z-10">
            {/* Left section */}
            <div className="space-y-4 md:space-y-5">
              <h1 className="text-4xl font-extrabold tracking-tight">
                Welcome back, <span className="text-cyan-200">Jane!</span>
              </h1>

              <p className="text-cyan-100 text-lg max-w-md">
                You’ve achieved{" "}
                <span className="font-semibold text-white">85%</span> of your
                learning goal this month. Keep it up, consistency is key to
                mastery.
              </p>

              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl backdrop-blur-sm">
                  <Target className="w-5 h-5 text-white/90" />
                  <span className="font-medium">85% Complete</span>
                </div>

                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl backdrop-blur-sm">
                  <TrendingUp className="w-5 h-5 text-white/90" />
                  <span className="font-medium">Level Up!</span>
                </div>
              </div>
            </div>

            {/* Right section: avatar + ring */}
            <div className="relative mt-8 md:mt-0">
              <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-400 p-[3px] shadow-xl hover:scale-105 transition-transform duration-300">
                <img
                  className="w-full h-full rounded-full object-cover border-4 border-white/20"
                  src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2021/03/instructor-02-free-img.jpg"
                  alt="Profile"
                />
                {/* Glowing status ring */}
                <div className="absolute inset-0 rounded-full ring-2 ring-white/40 animate-pulse"></div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-2 right-4 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm flex items-center gap-1 shadow-lg">
                <Star className="w-4 h-4 fill-yellow-500" /> Top Learner
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Active Courses</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">3</p>
              </div>
              <BookOpen className="w-10 h-10 text-orange-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Hours Learned</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">127</p>
              </div>
              <Clock className="w-10 h-10 text-orange-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Avg. Progress</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">84%</p>
              </div>
              <TrendingUp className="w-10 h-10 text-orange-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Assignments</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">1</p>
              </div>
              <Award className="w-10 h-10 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Learning Progress Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Learning Progress
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="progress"
                  stroke="#0891b2"
                  strokeWidth={3}
                  dot={{ fill: "#0891b2", r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Time Distribution Pie Chart */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Time Distribution
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={timeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {timeData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Course Progress Bar Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">My Courses</h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={courseData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Bar
                  dataKey="completion"
                  fill="#0891b2"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Schedule */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">My Schedule</h2>
              <span className="text-blue-600 text-sm font-semibold">Today</span>
            </div>

            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {weekDays.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedDay === day
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col items-center">
                    <Clock className="w-5 h-5 text-blue-600 mb-1" />
                    <span className="text-sm font-semibold text-gray-700">
                      {item.time}
                    </span>
                    <span className="text-xs text-gray-500">
                      {item.duration}
                    </span>
                  </div>
                  <div className="flex-1 border-l-2 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-800">
                      {item.course}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Online Session</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assignment Card */}
          <div className="lg:col-span-3 bg-[#007991] rounded-xl p-6 shadow-md text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Current Assignment
                </h3>
                <p className="text-2xl font-bold">Create a Simple Login Page</p>
                <p className="mt-2 text-purple-100">
                  Due in 3 days • React & CSS
                </p>
              </div>
              <Link to="assignment">
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2">
                  Start Now <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
