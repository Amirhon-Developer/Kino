import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Arrival.css"
import { Link } from 'react-router-dom'

import { Arrival } from "./Arrival"

const Arrivals = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
   <div className="bg">
     <div className="Arrival containerr">
     <div className="suggested-title">
                <h4>Suggested Movies</h4>
              </div>
              <hr />
      <Slider {...settings} className="Slider">
      {Arrival.slice(0,  6).map((item) => (
        <div className="img1">
        <img src={item.Image} alt="" />
        </div>
        ))}
      </Slider>                                                 
      <div className="btn0700  ">
          <div>
          <Link to="/movies">
            <button className="i">
              View All <i class="fa-sharp fa-solid fa-angle-right"></i>
            </button>
            </Link>
          </div>
        </div>
      <div className="suggested-title">
                <h4>Suggested Movies</h4>
              </div>
              <hr />
              <Slider {...settings}>
      {Arrival.slice(0,  6).map((item) => (
        <div className="img1">
        <img src={item.Image} alt="" />
        </div>
        ))}
      </Slider> 
      <div className="btn0700">
          <div>
          <Link to="/movies">
            <button className="i">
              View All <i class="fa-sharp fa-solid fa-angle-right"></i>
            </button>
            </Link>
          </div>
        </div>
    </div>
   </div>
  );
};

export default Arrivals;
