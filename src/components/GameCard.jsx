import React from "react";
import { Link } from "react-router-dom";

/**
 * GameCard Component
 * 
 * Displays a summary of a game including image, title, genre, rating, and release date.
 * Provides a link to the detailed view of the game.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.game - The game object containing details
 */
const GameCard = ({ game }) => {
  if (!game) return null;

  return (
    <div className="card w-full bg-gray-800 text-white shadow-xl rounded-xl hover:scale-105 transition-transform duration-300 flex flex-col h-full border border-gray-700 hover:border-[#00FFFF]">
      {/* Image */}
      <figure className="h-48 overflow-hidden rounded-t-xl relative">
        <img
          src={game?.coverPhoto || "https://via.placeholder.com/320x192"}
          alt={game?.title || "Game"}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 badge badge-secondary">{game?.genre || "Action"}</div>
      </figure>

      {/* Card Body */}
      <div className="card-body flex flex-col flex-1 p-4 gap-3">
        <h2 className="card-title text-xl font-bold text-[#00FFFF] truncate">{game?.title || "Unknown Game"}</h2>
        <p className="text-gray-400 text-sm line-clamp-2">{game?.description || "No description available"}</p>

        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700">
           <div className="flex items-center gap-1 text-yellow-400">
             <span>⭐</span>
             <span className="font-semibold">{game?.rating || "4.5"}</span>
           </div>
           <div className="text-gray-400 text-sm">
             {game?.releaseDate || "2024"}
           </div>
        </div>

        {/* View Details Button  */}
        <div className="mt-4">
          <Link
            to={`/gamedetails/${game?.id || game?._id}`}
            className="block w-full px-4 py-2 bg-[#00FFFF] text-gray-900 font-bold rounded-lg shadow-md hover:bg-[#00cccc] transform transition-all duration-300 text-center"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
