import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const location = useLocation();
  const passedEmail = location.state?.email || "";
  const [email, setEmail] = useState(passedEmail);
  const auth = getAuth();

  const handleReset = () => {
    if (!email) return toast.error("Please enter your email");

    // Send reset email via Firebase
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Redirecting to Gmail...");
        // Redirect to Gmail after 2 seconds
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 2000);
      })
      .catch((err) => {
        toast.error(err.message || "Failed to send reset email");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#071427]">
      <div className="w-full max-w-md p-8 bg-white/5 border border-white/10 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#63E6F6] mb-2">Reset Password</h2>
        <p className="text-gray-300 text-sm mb-6">
          Enter your email and reset your password.
        </p>

        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-lg bg-[#0F2430] border border-[#1E9DBE] text-white focus:outline-none"
        />

        <button
          onClick={handleReset}
          className="mt-4 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#0FB7D1] to-[#4C1D71] text-black font-semibold"
        >
          Reset Password
        </button>

        
      </div>
    </div>
  );
};

export default ForgetPassword;
