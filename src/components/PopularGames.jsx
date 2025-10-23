import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";

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
    <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 py-12">
      <h1 className="text-5xl text-center font-bold text-[#00FFFF] pb-5">
        Popular Games
      </h1>
      <p className="text-2xl text-center font-bold text-[#CECECF] mb-10">
        Discover the most loved games by our community
      </p>

      <div className="flex flex-wrap gap-10 justify-center">
        {games && games.length > 0 ? (
          games
            .slice(0, 3)
            .map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <p className="text-center text-white">No games available</p>
        )}
      </div>

      <div className="flex justify-center items-center mt-10">
        <Link
          to="/allgames"
          className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-[#4C1D71] to-[#BE21E0] text-white font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
        >
          All Games
        </Link>
      </div>
    </div>
  );
};

export default PopularGames;
