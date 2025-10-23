import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, updateProfileFunc } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  if (!user) return <p className="text-white text-center mt-10">Loading...</p>;

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name || !email || !photoURL) {
      toast.error("Name, email, and photo URL cannot be empty.");
      return;
    }

    try {
      setLoading(true);

      await updateProfileFunc(name, photoURL);

      toast.success("Profile updated successfully!");
      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-[#00FFFF] mb-8">My Profile</h1>

      <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-3xl">
        {/* Profile Image */}
        <img
          src={photoURL || "https://via.placeholder.com/150"}
          alt={name}
          className="w-40 h-40 rounded-full object-cover border-4 border-[#00FFFF]"
        />

        {/* Update Form */}
        <div className="flex-1">
          <form onSubmit={handleUpdate} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Update Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              placeholder="Update Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="text"
              placeholder="Update Photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-gradient-to-r from-[#4C1D71] to-[#BE21E0] text-white rounded-lg hover:scale-105 transition-all font-semibold"
            >
              {loading ? "Updating..." : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
