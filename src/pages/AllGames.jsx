import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import GameCard from "../components/GameCard";

const AllGames = () => {
  const { games, loading } = useContext(GameContext);

  if (loading)
    return (
      <div className="text-center text-white py-10 text-xl font-semibold">
        Loading games...
      </div>
    );

  return (
    <div className="py-12 bg-gradient-to-r from-black via-gray-900 to-gray-800 min-h-screen">
      <h1 className="text-4xl text-center text-[#00FFFF] font-bold mb-6">
        All Games
      </h1>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </div>
  );
};

export default AllGames;
