import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Section2.css"

import { Carddata } from "../../components/cards/Carddata"

const Section2 = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
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
      <Slider {...settings}>
      {Carddata.slice(0, 4).map((item) => (
        <div className="img1">
        <img src={item.Image} alt="" />
        </div>
        
        ))}
      </Slider>
   
    
    </div>
   </div>
  );
};

export default Section2;
