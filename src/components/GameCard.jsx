import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  if (!game) return null; 

  return (
    <div className="card w-80 bg-gray-900 text-white shadow-xl hover:scale-105 transition-transform duration-300">
      <figure>
        <img
          src={game?.coverPhoto || "https://via.placeholder.com/320x192"}
          alt={game?.title || "Game"}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold">{game?.title || "Unknown Game"}</h2>
        <p className="text-gray-400 text-sm">{game?.description || "No description available"}</p>

        <div className="card-actions justify-between items-center mt-3">
          <div className="badge badge-outline border-yellow-400 text-yellow-400">
            {game?.category || "Unknown"}
          </div>
          <div className="flex items-center">
            <span className="text-yellow-400 font-semibold">
              ⭐ {game?.ratings || "N/A"}
            </span>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link
            to={`/gamedetails/${game?.id}`}
            className="w-full md:w-auto px-4 py-2 bg-gradient-to-r from-[#4C1D71] to-[#BE21E0] text-white font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
