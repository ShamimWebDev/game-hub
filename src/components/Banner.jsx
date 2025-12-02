import React, { useContext, useEffect, useState, useMemo } from "react";
import { GameContext } from "../context/GameContext";

const Banner = () => {
  const { games, loading } = useContext(GameContext);
  const [current, setCurrent] = useState(0);

  const topGames = useMemo(() => {
    if (!games) return [];
    return [...games]
      .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
      .slice(0, 3);
  }, [games]);

  useEffect(() => {
    if (topGames.length > 0) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % topGames.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [topGames]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!games || games.length === 0)
    return <p className="text-center mt-10">No games available</p>;

  return (
    <div className="w-full relative">
      <div className="relative w-full h-80 md:h-[500px] overflow-hidden  bg-gradient-to-r from-black via-gray-900 to-gray-800">
        {topGames.map((game, index) => (
          <div
            key={game.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-center items-center text-center px-4 md:px-0">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                {game.title}
              </h2>
              <p className="text-white mb-2 max-w-xl">{game.description}</p>
              <p className="text-yellow-400 font-semibold mb-4">
                ⭐ {game.ratings}
              </p>
              <a
                href={game.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-2 bg-gradient-to-r from-green-400 to-green-600 text-black rounded hover:brightness-110 transition">
                  Explore
                </button>
              </a>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 inset-x-0 flex justify-center gap-3 z-20">
          {topGames.map((game, index) => (
            <button
              key={game.id}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === current
                  ? "opacity-100 scale-125 bg-gradient-to-r from-green-400 to-green-600"
                  : "opacity-50 bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
