import React, { useState } from "react";
import { toast } from "react-toastify";
import useDocumentTitle from "../hook/useDocumentTitle";

const Contact = () => {
   useDocumentTitle("Contact");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-[#00FFFF] mb-6">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#0FB7D1] to-[#4C1D71] text-black font-semibold py-2 rounded-lg hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
