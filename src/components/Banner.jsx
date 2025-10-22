import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../context/GameContext";

const Banner = () => {
  const { games, loading } = useContext(GameContext);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (games && games.length > 0) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % Math.min(3, games.length));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [games]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!games || games.length === 0)
    return <p className="text-center mt-10">No games available</p>;

  const topGames = games.slice(0, 3);

  return (
    <div className="w-full relative">
      {/* Slides */}
      <div className="relative w-full h-60 md:h-96 overflow-hidden">
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

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4 md:px-0">
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
                <button className="px-6 py-2 bg-green-400 text-black rounded hover:bg-green-500 transition">
                  Explore
                </button>
              </a>
            </div>
          </div>
        ))}

        {/* Dots below image */}
        <div className="absolute bottom-4 inset-x-0 flex justify-center gap-3 z-20">
          {topGames.map((game, index) => (
            <button
              key={game.id}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full bg-blue-500 transition-all duration-300 ${
                index === current ? "opacity-100 scale-110" : "opacity-50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
