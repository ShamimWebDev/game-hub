import React from "react";
import useDocumentTitle from "../hook/useDocumentTitle";

const AboutUs = () => {
    useDocumentTitle("AboutUs");
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-[#00FFFF] mb-4">About GameHub</h1>
      <p className="max-w-2xl text-center text-gray-300 leading-relaxed">
        GameHub is a platform for indie game developers and gaming enthusiasts.
        Discover amazing games, support developers, and be part of a growing
        community. Our goal is to bring gamers together and showcase
        high-quality indie titles.
      </p>
    </div>
  );
};

export default AboutUs;
