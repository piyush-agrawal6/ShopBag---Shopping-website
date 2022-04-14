import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import React from "react";

const Slider = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img src="./assets/slider/slider.webp" alt="images" />
        </div>
        <div className="image">
          <img src="./assets/slider/slider2.jpg" alt="images" />
        </div>
        <div className="image">
          <img src="./assets/slider/slider3.jpg" alt="images" />
        </div>
        <div className="image">
          <img src="./assets/slider/slider4.webp" alt="images" />
        </div>
        <div className="image">
          <img src="./assets/slider/slider5.webp" alt="images" />
        </div>
        <div className="image">
          <img src="./assets/slider/slider6.webp" alt="images" />
        </div>
      </Carousel>
      <hr />
    </div>
  );
};

export default Slider;
