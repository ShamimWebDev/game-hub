import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useDocumentTitle from "../hook/useDocumentTitle";

const Register = () => {
    useDocumentTitle("Register");
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    sendEmailVerificationFunc,
    setLoading,
    signOutFunc,
    setUser
  } = useContext(AuthContext);

  const [form, setForm] = useState({ name: "", photo: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, photo, email, password } = form;

    // Password validation regex
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+]).{8,}$/;
    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
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

      toast.success("Registered successfully! Check your email to verify your account.");
      navigate("/signin");
    } catch (err) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        toast.error("Email already in use. Please try logging in.");
      } else if (err.code === "auth/invalid-email") {
        toast.error("Invalid email format.");
      } else if (err.code === "auth/weak-password") {
        toast.error("Weak password. Please follow the rules.");
      } else {
        toast.error(err.message || "Registration failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#061826]">
      <div className="w-full max-w-md p-8 bg-white/5 border border-white/10 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#63E6F6] mb-2">Create account</h2>
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

          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#0FB7D1] to-[#4C1D71] text-black font-semibold cursor-pointer"
          >
            Create account
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/signin" className="text-[#63E6F6] underline cursor-pointer">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
