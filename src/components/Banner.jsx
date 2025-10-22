import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-700 to-blue-700 text-white text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Mystic Realms</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Embark on an epic fantasy adventure with stunning visuals and
          immersive gameplay.
        </p>
        <button className="px-6 py-3 bg-green-400 text-black font-semibold rounded hover:bg-green-500">
          Explore
        </button>
      </section>
    </div>
  );
};

export default Banner;
