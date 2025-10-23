import React from "react";
import useDocumentTitle from "../hook/useDocumentTitle";

const faqData = [
  {
    question: "How do I create an account?",
    answer: "Click on the Sign Up button in the navbar and fill out the form."
  },
  {
    question: "Can I play games for free?",
    answer: "Yes! GameHub offers a variety of free indie games to try."
  },
  {
    question: "How do I contact support?",
    answer: "Use the Contact page to send us a message, and we’ll reply shortly."
  },
];

const FAQ = () => {
  useDocumentTitle("FAQ");
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-[#00FFFF] mb-6">Frequently Asked Questions</h1>
      <div className="w-full max-w-2xl space-y-4">
        {faqData.map((item, idx) => (
          <div key={idx} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-[#0FB7D1]">{item.question}</h2>
            <p className="text-gray-300 mt-1">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
