import { motion } from "motion/react";

const PageLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-[#00FFFF] text-3xl font-bold"
      >
        Loading...
      </motion.div>
    </motion.div>
  );
};

export default PageLoader;
