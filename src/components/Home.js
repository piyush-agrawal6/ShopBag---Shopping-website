import React from "react";
import Slider from "./Carousel";
import Products from "./Products";
import Categories from "./Categories";
const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <hr />
    
      <Products />
    </div>
  );
};

export default Home;
