import React from "react";

import Newsletter from "../components/Newsletter";
import Banner from "../components/banner";

import PopularGames from "../components/PopularGames";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <PopularGames></PopularGames>

      <Newsletter />
    </>
  );
};

export default Home;
