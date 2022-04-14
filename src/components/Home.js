import React from "react";
import Slider from "./Carousel";
import Products from "./Products";
import Categories from "./Categories";
const Home = () => {
  return (
    <div>
      <Slider />
      <Products />
      <hr />
      <hr />
      <Categories />

    </div>
  );
};

export default Home;
