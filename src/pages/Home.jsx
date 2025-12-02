import React from "react";
import Newsletter from "../components/Newsletter";
import Hero from "../components/Hero";
import PopularGames from "../components/PopularGames";
import Categories from "../components/Categories";
import Blog from "../components/Blog";
import useDocumentTitle from "../hook/useDocumentTitle";

/**
 * Home Page Component
 * Serves as the landing page, aggregating various sections like Hero,
 * Popular Games, Categories, Blog, and Newsletter.
 */
const Home = () => {
  useDocumentTitle("Home");
  return (
    <>
      <Hero />
      <PopularGames />
      <Categories />
      <Blog />
      <Newsletter />
    </>
  );
};

export default Home;
