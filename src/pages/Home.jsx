import React from "react";
import Banner from "../components/banner";
import Newsletter from "../components/Newsletter";
import PopularGames from "../components/PopularGames";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularGames></PopularGames>
      <Newsletter></Newsletter>
      
    </div>
  );
};

export default Home;
