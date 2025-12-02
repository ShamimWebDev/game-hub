import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Action", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, name: "Adventure", image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1965&auto=format&fit=crop" },
  { id: 3, name: "RPG", image: "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?q=80&w=2071&auto=format&fit=crop" },
  { id: 4, name: "Strategy", image: "https://images.unsplash.com/photo-1611996996137-b6a997ba6742?q=80&w=1933&auto=format&fit=crop" },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#00FFFF] mb-12">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={`/allgames?category=${category.name}`} key={category.id} className="group relative h-64 rounded-xl overflow-hidden cursor-pointer shadow-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white tracking-wider border-b-2 border-[#00FFFF] pb-1">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
