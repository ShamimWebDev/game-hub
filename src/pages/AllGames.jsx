import React, { useContext, Suspense, useState } from "react";
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
  const [sortOption, setSortOption] = useState("default");
  const [filterCategory, setFilterCategory] = useState("All");

  // Extract unique categories from the games list for the filter dropdown
  const categories = ["All", ...new Set(games?.map((game) => game.genre || game.category).filter(Boolean))];

  /**
   * Memoized filtered and sorted games.
   * Optimizes performance by recalculating only when dependencies change.
   */
  const processedGames = React.useMemo(() => {
    if (!games) return [];
    let result = [...games];

    // Filter
    if (filterCategory !== "All") {
      result = result.filter(
        (game) => (game.genre || game.category) === filterCategory
      );
    }

    // Sort
    if (sortOption === "rating-desc") {
      result.sort((a, b) => parseFloat(b.rating || 0) - parseFloat(a.rating || 0));
    } else if (sortOption === "rating-asc") {
      result.sort((a, b) => parseFloat(a.rating || 0) - parseFloat(b.rating || 0));
    } else if (sortOption === "year-desc") {
      result.sort((a, b) => parseInt(b.releaseDate || 0) - parseInt(a.releaseDate || 0));
    } else if (sortOption === "year-asc") {
      result.sort((a, b) => parseInt(a.releaseDate || 0) - parseInt(b.releaseDate || 0));
    }

    return result;
  }, [games, sortOption, filterCategory]);

  return (
    <div className="py-12 bg-gradient-to-r from-black via-gray-900 to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h1 className="text-4xl text-center text-[#00FFFF] font-bold mb-8">
          All Games
        </h1>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
          {/* Filter */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <label className="text-gray-300 font-medium">Category:</label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-[#00FFFF] w-full md:w-48"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <label className="text-gray-300 font-medium">Sort By:</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-[#00FFFF] w-full md:w-48"
            >
              <option value="default">Default</option>
              <option value="rating-desc">Rating (High to Low)</option>
              <option value="rating-asc">Rating (Low to High)</option>
              <option value="year-desc">Year (Newest)</option>
              <option value="year-asc">Year (Oldest)</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <LoadingSkeleton />
      ) : (
        <Suspense fallback={<LoadingSkeleton />}>
          <motion.div
            className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={`${filterCategory}-${sortOption}`} // Re-animate on change
          >
            {processedGames.length > 0 ? (
              processedGames.map((game) => (
                <motion.div
                  key={game.id}
                  variants={cardVariants}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-full"
                >
                  <GameCard game={game} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-2xl text-gray-400">No games found matching your criteria.</p>
                <button 
                  onClick={() => {setFilterCategory("All"); setSortOption("default");}}
                  className="mt-4 text-[#00FFFF] hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </motion.div>
        </Suspense>
      )}
    </div>
  );
};

export default AllGames;
