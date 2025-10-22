import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-linear-to-r from-[#112A39] to-[#4C1D71] py-16 px-6 text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Stay in the Game
      </h3>
      <p className="text-gray-300 mb-8 max-w-xl mx-auto">
        Get the latest updates on new releases, exclusive content, and gaming
        news delivered straight to your inbox.
      </p>

      <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:flex-1 px-4 py-3 rounded-lg bg-[#1A1A2E] border border-[#25B9DE] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25B9DE] transition"
        />
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-[#4C1D71] to-[#BE21E0] text-white font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#BE21E0]"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
