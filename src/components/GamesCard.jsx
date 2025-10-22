import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

const PopularGames = () => {
  const { games, loading } = useContext(GameContext);

  if (loading) {
    return (
      <div className="text-center text-white py-10 text-xl font-semibold">
        Loading games...
      </div>
    );
  }

  return (
    <div className="bg-linear-to-r from-black via-gray-900 to-gray-800 p-10 ">
      <h1 className="text-5xl text-center font-bold text-[#00FFFF] mb-10">
        Popular Games
      </h1>
      <p className="text-2xl text-center font-bold text-[#CECECF]  mb-10">Discover the most loved games by our community</p>

      <div className="flex flex-wrap gap-10 justify-center">
        {games.slice(0, 3).map((game) => (
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
              <h2 className="card-title text-xl font-semibold">
                {game.title}
              </h2>
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
                <a
                  href={game.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-green-400 hover:bg-green-500 text-black font-semibold"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;
