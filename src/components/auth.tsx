import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 via-indigo-600 to-cyan-500 px-4">
      {/* LARGE SCREEN: Toggle Layout */}
      <div className="hidden md:flex w-full max-w-5xl bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden">
        {/* LEFT FORM */}
        <motion.div
          animate={{ x: isSignUp ? "100%" : "0%" }}
          transition={{ duration: 0.7, type: "spring", damping: 20 }}
          className="w-1/2 p-10 flex flex-col justify-center text-white z-20"
        >
          {isSignUp ? (
            <>
              <h2 className="text-3xl font-bold mb-2 text-center">Create Account</h2>
              <p className="text-sm text-center text-gray-200 mb-6">Use your email for registration</p>
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Name" className="p-3 rounded-lg bg-white/20 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                <input type="email" placeholder="Email" className="p-3 rounded-lg bg-white/20 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                <input type="password" placeholder="Password" className="p-3 rounded-lg bg-white/20 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                <button className="w-full bg-cyan-500 py-3 rounded-full font-semibold hover:bg-cyan-600 transition">Sign Up</button>
                <button type="button" className="w-full bg-white text-gray-800 font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                  <i className="fab fa-google"></i> Sign up with Google
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-2 text-center">Welcome Back!</h2>
              <p className="text-sm text-center text-gray-200 mb-6">Use your email and password to login</p>
              <form className="flex flex-col gap-4">
                <input type="email" placeholder="Email" className="p-3 rounded-lg bg-white/20 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <input type="password" placeholder="Password" className="p-3 rounded-lg bg-white/20 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <a href="#" className="text-sm text-gray-300 text-right hover:underline">Forgot Password?</a>
                <button className="w-full bg-blue-500 py-3 rounded-full font-semibold hover:bg-blue-600 transition">Sign In</button>
                <button type="button" className="w-full bg-white text-gray-800 font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                  <i className="fab fa-google"></i> Login with Google
                </button>
              </form>
            </>
          )}
        </motion.div>

        {/* RIGHT TOGGLE PANEL */}
        <motion.div
          animate={{ x: isSignUp ? "-100%" : "0%" }}
          transition={{ duration: 1.5, type: "spring", damping: 20 }}
          className={`w-1/2 h-100 flex flex-col justify-center items-center text-center p-10 text-white rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-500`}
        >
          <motion.h2
            key={isSignUp ? "signUpText" : "signInText"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            {isSignUp ? "Welcome Back!" : "Join Career X"}
          </motion.h2>
          <p className="text-sm leading-relaxed text-blue-100 max-w-xs mb-8">
            {isSignUp
              ? "Your journey towards a brighter future starts here. Let's continue building your dreams."
              : "Ready to discover your true potential? Join Career X today and take your first step toward success."}
          </p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </motion.div>
      </div>

      {/* SMALL SCREEN: Single Form */}
      <div className="md:hidden w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden p-8"
        >
          <h2 className="text-3xl font-bold mb-2 text-center text-white">
            {isSignUp ? "Create Account" : "Welcome Back!"}
          </h2>
          <p className="text-sm text-center text-gray-200 mb-6">
            {isSignUp ? "Use your email for registration" : "Use your email and password to login"}
          </p>

          <form className="flex flex-col gap-4">
            {isSignUp && (
              <input type="text" placeholder="Name" className="p-3 rounded-lg bg-white/20 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white" />
            )}
            <input type="email" placeholder="Email" className="p-3 rounded-lg bg-white/20 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white" />
            <input type="password" placeholder="Password" className="p-3 rounded-lg bg-white/20 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white" />

            {!isSignUp && (
              <a href="#" className="text-sm text-gray-300 text-right hover:underline">
                Forgot Password?
              </a>
            )}

            <button
              type="submit"
              className={`w-full py-3 rounded-full font-semibold transition ${
                isSignUp ? "bg-cyan-500 hover:bg-cyan-600" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>

            <button
              type="button"
              className="w-full bg-white text-gray-800 font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition"
            >
              <i className="fab fa-google"></i> {isSignUp ? "Sign up with Google" : "Login with Google"}
            </button>
          </form>

          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="mt-6 text-sm text-white underline hover:text-gray-200 w-full"
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
