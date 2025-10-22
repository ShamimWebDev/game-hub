import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GameContext } from "../context/GameContext";

const GameDetails = () => {
  const { id } = useParams();
  const { games, loading } = useContext(GameContext);

  if (loading) return <p className="text-center mt-10 text-white">Loading...</p>;

  const game = games.find((g) => g.id === id);

  if (!game) return <p className="text-center mt-10 text-white">Game not found!</p>;

  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-6 md:px-20">
      {/* Game image */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full md:w-1/3 h-64 md:h-96 object-cover rounded-xl shadow-xl"
        />


        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00FFFF]">{game.title}</h1>
          <p className="text-gray-400 mb-4">{game.description}</p>

          <div className="flex flex-wrap gap-4 mb-4">
            <span className="badge badge-outline border-yellow-400 text-yellow-400">{game.category}</span>
            <span className="badge badge-outline border-green-400 text-green-400">Developer: {game.developer}</span>
            <span className="badge badge-outline border-blue-400 text-blue-400">Rating: ⭐ {game.ratings}</span>
          </div>

          <a
            href={game.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-8 py-3 text-lg font-semibold text-black bg-gradient-to-r from-[#4C1D71] to-[#BE21E0] rounded-lg hover:from-[#BE21E0] hover:to-[#4C1D71] transition"
          >
            Play Now
          </a>
        </div>
      </div>

      
      <div className="mt-12 bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Game Details</h2>
        <p className="text-gray-300 mb-2"><strong>Title:</strong> {game.title}</p>
        <p className="text-gray-300 mb-2"><strong>Category:</strong> {game.category}</p>
        <p className="text-gray-300 mb-2"><strong>Developer:</strong> {game.developer}</p>
        <p className="text-gray-300 mb-2"><strong>Rating:</strong> ⭐ {game.ratings}</p>
        <p className="text-gray-300"><strong>Description:</strong> {game.description}</p>
      </div>
    </div>
  );
};

export default GameDetails;
