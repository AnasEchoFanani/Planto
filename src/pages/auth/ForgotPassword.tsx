import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  // const [isLoading, setIsLoading] = useState(false)

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-md w-full space-y-8 glass p-8 rounded-[2rem]">
        <div>
          <h2 className="text-3xl font-bold text-center text-white">
            Reset Password
          </h2>
          <p className="mt-2 text-center text-gray-400">
            Enter your email to receive reset instructions
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FaEnvelope className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none relative block w-full pl-10 pr-3 py-2 bg-black/20 border border-white/10 placeholder-gray-400 text-white rounded-xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              placeholder="Email address"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full transition-colors"
          >
            Send Reset Link
          </button>

          <div className="text-center">
            <Link to="/signin" className="text-green-400 hover:text-green-300">
              Back to Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
