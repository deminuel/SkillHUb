import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../Utils/Spinner";
import { useUser } from "../context/UserContext";

const SignUpLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { setUser } = useUser();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const signUpImage =
    "https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2021/03/bg-07-free-img.jpg";

  const loginImage =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D";

  // API Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      if (response.status === 200) {
        const userData = response.data;

        // Save user + tokens to localStorage (PERSIST LOGIN)
        localStorage.setItem("user", JSON.stringify(userData));

        // Update context
        setUser(userData);

        setUsername("");
        setPassword("");
        setLoading(false);
        setErrorMessage("");

        navigate("/dashboard/overview");
      }
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
      setErrorMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <section className="relative min-h-screen w-full flex lg:flex-row flex-col font-[Poppins]">
      <img
        src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/logo-regular-free-img.png"
        alt="Logo"
        className="absolute top-6 left-6 z-50 w-44 h-auto"
      />

      <AnimatePresence mode="wait">
        <motion.img
          key={isLogin ? "loginImg" : "signupImg"}
          src={isLogin ? loginImage : signUpImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003f4f]/90 to-[#007991]/70 backdrop-blur-sm"></div>

      {/* Form Section */}
      <div className="relative z-10 px-4 w-full lg:w-1/2 flex flex-col justify-center items-center min-h-screen">
        <motion.div
          key={isLogin ? "loginForm" : "signupForm"}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-8 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl text-white mx-4"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-6">
            {isLogin ? "Create Account" : "Welcome Back"}
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            {isLogin && (
              <input
                type="Email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white/30 border border-white/40 placeholder-white/75 text-white focus:ring-2 focus:ring-white outline-none"
              />
            )}

            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-lg bg-white/30 border border-white/40 placeholder-white/75 text-white focus:ring-2 focus:ring-white outline-none"
            />

            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-white/30 border border-white/40 placeholder-white/75 text-white focus:ring-2 focus:ring-white outline-none"
              />
              {showPassword ? (
                <MdRemoveRedEye
                  onClick={toggleShowPassword}
                  className="absolute top-4 text-black right-4 cursor-pointer"
                />
              ) : (
                <IoEyeOffSharp
                  onClick={toggleShowPassword}
                  className="absolute text-black top-4 right-4 cursor-pointer"
                />
              )}
            </div>

            {errorMessage && (
              <p className="text-red-400 text-center">{errorMessage}</p>
            )}

            <button className="w-full flex items-center justify-center py-3 rounded-lg bg-white text-[#007991] font-semibold text-lg hover:bg-gray-100 transition-all">
              {loading ? <Spinner /> : isLogin ? "Sign Up" : "Login"}
            </button>
          </form>

          <p className="mt-6 text-center text-white/90">
            {isLogin ? "Already have an account?" : "Don't have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 underline font-semibold hover:text-white"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SignUpLogin;
