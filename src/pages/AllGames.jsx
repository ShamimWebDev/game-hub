import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { Link } from "react-router-dom";

const AllGames = () => {
  const { games, loading } = useContext(GameContext);

  if (loading) {
    return (
      <div className="text-center text-white py-10 text-xl font-semibold">
        Loading games...
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 py-12">
      <h1 className="text-5xl text-center font-bold text-[#00FFFF] pb-5">
        All Games
      </h1>
      <p className="text-2xl text-center font-bold text-[#CECECF] mb-10">
        Explore all our games
      </p>

      <div className="flex flex-wrap gap-10 justify-center">
        {games.map((game) => (
          <div
            key={game.id}
            className="card w-80 bg-gray-900 text-white shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <figure>
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold">{game.title}</h2>
              <p className="text-gray-400 text-sm">{game.description}</p>

              <div className="card-actions justify-between items-center mt-3">
                <div className="badge badge-outline border-yellow-400 text-yellow-400">
                  {game.category}
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 font-semibold">
                    ⭐ {game.ratings}
                  </span>
                </div>
              </div>

              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/gamedetails/${game.id}`}
                  className="w-full md:w-auto px-4 py-2 bg-gradient-to-r from-[#4C1D71] to-[#BE21E0] text-white font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
