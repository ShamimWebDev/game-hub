import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import useDocumentTitle from "../hook/useDocumentTitle";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signin = () => {
  useDocumentTitle("Signin");
  const { signInWithEmailAndPasswordFunc, signInWithGoogleFunc, setLoading } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPasswordFunc(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message || "Login failed"))
      .finally(() => setLoading(false));
  };

  const handleGoogle = () => {
    setLoading(true);
    signInWithGoogleFunc()
      .then(() => {
        toast.success("Signed in with Google!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message || "Google sign-in failed"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#071427]">
      <div className="w-full max-w-md p-8 bg-white/5 border border-white/10 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#63E6F6] mb-2">Welcome back</h2>
        <p className="text-sm text-gray-300 mb-6">
          Sign in to continue to <span className="text-[#63E6F6]">GameHub</span>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded-lg bg-[#0F2430] border border-[#1E9DBE] text-white focus:outline-none"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#0F2430] border border-[#1E9DBE] text-white focus:outline-none"
            />
            <span
              className="absolute right-3 top-2/4 -translate-y-2/4 cursor-pointer text-gray-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="text-right">
            <Link
              to="/forget-password"
              state={{ email }}
              className="text-sm text-[#63E6F6] underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#0FB7D1] to-[#4C1D71] text-black font-semibold"
          >
            Sign in
          </button>
        </form>

        <div className="my-4 text-center text-gray-400">or</div>

        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-3 px-4 py-2 rounded-lg bg-[#062733] border border-[#0FB7D1] text-white"
        >
          <FcGoogle className="text-2xl" /> Continue with Google
        </button>

        <p className="mt-4 text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#63E6F6] underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
