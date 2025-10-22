import React from "react";
import GamesCard from "../components/GamesCard";
import Banner from "../components/banner";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <GamesCard></GamesCard>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
