import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import useDocumentTitle from "../hook/useDocumentTitle";
import { Link } from "react-router-dom";

const Profile = () => {
  useDocumentTitle("Profile");
  const { user } = useContext(AuthContext);

  if (!user)
    return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-[#00FFFF] mb-8">My Profile</h1>

      <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-3xl">
        {/* Profile Image */}
        <img
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt={user.displayName}
          className="w-40 h-40 rounded-full object-cover border-4 border-[#00FFFF]"
        />

        {/* User Info */}
        <div className="flex-1 flex flex-col gap-4">
          <p>
            <span className="font-semibold text-[#00FFFF]">Name: </span>
            {user.displayName}
          </p>
          <p>
            <span className="font-semibold text-[#00FFFF]">Email: </span>
            {user.email}
          </p>

          <Link
            to="/update-profile"
            className="mt-4 px-6 py-2 bg-gradient-to-r from-[#4C1D71] to-[#BE21E0] text-white rounded-lg hover:scale-105 transition-all font-semibold text-center"
          >
            Update Information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
