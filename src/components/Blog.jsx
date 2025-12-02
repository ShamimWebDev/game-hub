import React from "react";
import { motion } from "motion/react";

const blogs = [
  {
    id: 1,
    title: "Top 10 Games of 2024",
    excerpt: "Discover the masterpieces that defined the gaming landscape this year.",
    date: "Dec 1, 2024",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Future of VR Gaming",
    excerpt: "How virtual reality is reshaping immersive experiences.",
    date: "Nov 28, 2024",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Indie Gems You Missed",
    excerpt: "Hidden treasures from independent developers that deserve your attention.",
    date: "Nov 25, 2024",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2070&auto=format&fit=crop",
  },
];

const Blog = () => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-700 hover:border-[#00FFFF] transition-all"
            >
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-[#00FFFF] text-sm font-semibold">{blog.date}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{blog.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{blog.excerpt}</p>
                <button className="text-white font-medium hover:text-[#00FFFF] transition-colors">Read More &rarr;</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
