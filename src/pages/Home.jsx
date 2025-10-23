import React from "react";
import Newsletter from "../components/Newsletter";
import Banner from "../components/banner";
import PopularGames from "../components/PopularGames";
import useDocumentTitle from "../hook/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Home");
  return (
    <>
      <Banner></Banner>
      <PopularGames></PopularGames>

      <Newsletter />
    </>
  );
};

export default Home;
