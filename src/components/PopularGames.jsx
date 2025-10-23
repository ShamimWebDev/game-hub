import React, { useContext, Suspense } from "react";
import { GameContext } from "../context/GameContext";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const GameCard = React.lazy(() => import("../components/GameCard"));

const LoadingSkeleton = () => (
  <div className="flex flex-wrap gap-10 justify-center py-10">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="bg-gray-800 rounded-xl h-56 w-64"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
    ))}
  </div>
);

const PopularGames = () => {
  const { games, loading } = useContext(GameContext);

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 py-12">
      <motion.h1
        className="text-5xl text-center font-bold text-[#00FFFF] pb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Popular Games
      </motion.h1>

      <motion.p
        className="text-2xl text-center font-bold text-[#CECECF] mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Discover the most loved games by our community
      </motion.p>

      {loading ? (
        <LoadingSkeleton />
      ) : (
        <Suspense fallback={<LoadingSkeleton />}>
          <motion.div
            className="flex flex-wrap gap-10 justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {games?.length > 0 ? (
              games.slice(0, 3).map((game) => (
                <motion.div
                  key={game.id}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <GameCard game={game} />
                </motion.div>
              ))
            ) : (
              <p className="text-center text-white">No games available</p>
            )}
          </motion.div>
        </Suspense>
      )}

      <motion.div
        className="flex justify-center items-center mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/allgames"
          className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-[#4C1D71] to-[#BE21E0] text-white font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
        >
          All Games
        </Link>
      </motion.div>
    </div>
  );
};

export default PopularGames;
