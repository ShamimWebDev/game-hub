import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import useDocumentTitle from "../hook/useDocumentTitle";

/**
 * GameDetails Page Component
 * 
 * Displays comprehensive information about a specific game.
 * Fetches game data based on the URL parameter ID.
 * Shows loading state, error state (if game not found), and the full details view.
 */
const GameDetails = () => {
  useDocumentTitle("Game Details");
  const { id } = useParams();
  const { games, loading } = useContext(GameContext);

  if (loading) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#00FFFF]"></div>
    </div>
  );

  // Note: In a real app, you might fetch by ID from API. Here we find in context.
  // Ensure ID comparison is correct (string vs number)
  const game = games?.find((g) => String(g.id) === String(id) || String(g._id) === String(id));
  
  if (!game) return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-bold mb-4">Game Not Found</h2>
      <p className="text-gray-400">The game you are looking for does not exist.</p>
    </div>
  );

  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={game.coverPhoto || "https://via.placeholder.com/600x400"}
              alt={game.title}
              className="w-full h-auto rounded-xl shadow-2xl border border-gray-700"
            />
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-[#00FFFF]">{game.title}</h1>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-gray-800 rounded-full border border-gray-600 text-sm text-gray-300">
                {game.genre || game.category || "Action"}
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full border border-gray-600 text-sm text-gray-300">
                {game.releaseDate || "2024"}
              </span>
              <span className="px-3 py-1 bg-yellow-900/30 rounded-full border border-yellow-600 text-sm text-yellow-400 flex items-center gap-1">
                ⭐ {game.rating || game.ratings || "4.5"}
              </span>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-2 text-white">Description</h3>
              <p className="text-gray-300 leading-relaxed">
                {game.description || "Experience an epic journey in this amazing game. Immerse yourself in a world of adventure, strategy, and action."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <span className="block text-gray-400 text-sm">Developer</span>
                <span className="text-white font-medium">{game.developer || "Unknown Studio"}</span>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <span className="block text-gray-400 text-sm">Publisher</span>
                <span className="text-white font-medium">{game.publisher || "GameHub Inc."}</span>
              </div>
            </div>

            <div className="pt-6">
              <button
                className="w-full md:w-auto px-8 py-4 bg-[#00FFFF] text-gray-900 font-bold text-lg rounded-lg hover:bg-[#00cccc] transition shadow-[0_0_20px_rgba(0,255,255,0.3)] transform hover:scale-105"
                onClick={() => alert("Game launched!")}
              >
                Play Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
