import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useDocumentTitle from "../hook/useDocumentTitle";
import { motion } from "motion/react";

const Register = () => {
  useDocumentTitle("Register");
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    sendEmailVerificationFunc,
    setLoading,
    signOutFunc,
    setUser,
    signInWithGoogleFunc, // Make sure this exists in AuthContext
  } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    photo: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, photo, email, password } = form;

    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+]).{8,}$/;
    if (!regExp.test(password)) {
      toast.error(
        "Password must be 8+ chars with uppercase, lowercase, number & special char"
      );
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPasswordFunc(email, password);
      await updateProfileFunc(name, photo);
      await sendEmailVerificationFunc();

      await signOutFunc();
      setUser(null);

      toast.success(
        "Registered successfully! Check your email to verify your account."
      );
      navigate("/signin");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      setLoading(true);
      await signInWithGoogleFunc();
      toast.success("Signed in with Google!");
      navigate("/"); // redirect to home after Google sign-in
    } catch (err) {
      toast.error(err.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#061826] px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 bg-white/5 border border-white/10 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-[#63E6F6] mb-2">
          Create account
        </h2>
        <p className="text-sm text-gray-300 mb-6">
          Join GameHub — discover and support indie developers.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full px-4 py-2 rounded-lg bg-[#0F2430] border border-[#1E9DBE] text-white"
            required
          />
          <input
            name="photo"
            value={form.photo}
            onChange={handleChange}
            placeholder="Photo URL (optional)"
            className="w-full px-4 py-2 rounded-lg bg-[#0F2430] border border-[#1E9DBE] text-white"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-[#0F2430] border border-[#1E9DBE] text-white"
            required
          />

          <div className="relative">
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-[#0F2430] border border-[#1E9DBE] text-white"
              required
            />
            <span
              className="absolute right-3 top-2/4 -translate-y-2/4 cursor-pointer text-gray-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#0FB7D1] to-[#4C1D71] text-black font-semibold"
          >
            Create account
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleGoogle}
            type="button"
            className="w-full flex items-center justify-center gap-3 px-4 py-2 rounded-lg bg-[#062733] border border-[#0FB7D1] text-white mt-2"
          >
            <FcGoogle className="text-2xl" /> Continue with Google
          </motion.button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/signin" className="text-[#63E6F6] underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
