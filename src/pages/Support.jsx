import React from "react";
import { motion } from "motion/react";

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#00FFFF] mb-4">Support Center</h1>
          <p className="text-gray-300 text-lg">
            How can we help you today? Check our FAQs or contact us directly.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-[#00FFFF] transition-colors"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">FAQs</h2>
            <p className="text-gray-400 mb-4">
              Find answers to common questions about accounts, games, and payments.
            </p>
            <button className="text-[#00FFFF] font-medium hover:underline">
              Visit FAQ &rarr;
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-[#00FFFF] transition-colors"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-4">
              Need direct assistance? Our support team is available 24/7.
            </p>
            <button className="text-[#00FFFF] font-medium hover:underline">
              Get in Touch &rarr;
            </button>
          </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700"
        >
            <h3 className="text-xl font-bold text-white mb-4">Submit a Ticket</h3>
            <form className="space-y-4">
                <div>
                    <label className="block text-gray-400 mb-1">Email Address</label>
                    <input type="email" className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white focus:outline-none focus:border-[#00FFFF]" placeholder="your@email.com" />
                </div>
                <div>
                    <label className="block text-gray-400 mb-1">Issue Type</label>
                    <select className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white focus:outline-none focus:border-[#00FFFF]">
                        <option>General Inquiry</option>
                        <option>Technical Support</option>
                        <option>Billing</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-400 mb-1">Description</label>
                    <textarea className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white focus:outline-none focus:border-[#00FFFF]" rows="4" placeholder="Describe your issue..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#00FFFF] text-gray-900 font-bold py-2 rounded hover:bg-[#00cccc] transition">
                    Submit Ticket
                </button>
            </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;
