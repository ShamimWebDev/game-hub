import React, { useContext, Suspense } from "react";
import { GameContext } from "../context/GameContext";
import useDocumentTitle from "../hook/useDocumentTitle";
import { motion } from "motion/react";

const GameCard = React.lazy(() => import("../components/GameCard"));

const LoadingSkeleton = () => (
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-xl h-56"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
    ))}
  </div>
);

const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

const AllGames = () => {
  useDocumentTitle("All Games");
  const { games, loading } = useContext(GameContext);

  return (
    <div className="py-12 bg-gradient-to-r from-black via-gray-900 to-gray-800 min-h-screen">
      <h1 className="text-4xl text-center text-[#00FFFF] font-bold mb-6">
        All Games
      </h1>

      {loading ? (
        <LoadingSkeleton />
      ) : (
        <Suspense fallback={<LoadingSkeleton />}>
          <motion.div
            className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {games.map((game) => (
              <motion.div
                key={game.id}
                variants={cardVariants}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <GameCard game={game} />
              </motion.div>
            ))}
          </motion.div>
        </Suspense>
      )}
    </div>
  );
};

export default AllGames;
