import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  if (!game) return null;

  return (
    <div className="card w-80 bg-gray-900 text-white shadow-xl rounded-xl hover:scale-105 transition-transform duration-300 flex flex-col">
      {/* Image */}
      <figure className="h-48 overflow-hidden rounded-t-xl">
        <img
          src={game?.coverPhoto || "https://via.placeholder.com/320x192"}
          alt={game?.title || "Game"}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body flex flex-col flex-1 p-4 gap-3">
        <h2 className="card-title text-xl font-semibold">{game?.title || "Unknown Game"}</h2>
        <p className="text-gray-400 text-sm flex-1">{game?.description || "No description available"}</p>

        <div className="flex justify-between items-center mt-2">
          <div className="badge badge-outline border-yellow-400 text-yellow-400">
            {game?.category || "Unknown"}
          </div>
          <div className="text-yellow-400 font-semibold">⭐ {game?.ratings || "N/A"}</div>
        </div>

        {/* View Details Button  */}
        <div className="mt-4">
          <Link
            to={`/gamedetails/${game?.id}`}
            className="w-full px-4 py-2 bg-gradient-to-r from-[#4C1D71] to-[#BE21E0] text-white font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
