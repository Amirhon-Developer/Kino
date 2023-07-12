import React from "react";
import "./Suggested.css";
import Modal from "../modaldiv/Modaldiv"

import  { Suggesteddd } from "./Suggesteddd"

const Suggested = () => {
  return (
    <section className="bg">
      <div className="main-bl">
        <div className="containerr">
          <div className="row">
            <div className="col-md-6">
              <div className="suggested-title">
                <h4>Suggested Movies</h4>
                <div className="n-p-btns">
                  <span
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <i class="fa-solid fa-arrow-left"></i>
                  </span>

                  <span
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>

                  
                </div>
              </div>
              <hr />
              <div className="video">
                <div
                  id="carouselExampleCaptions"
                  class="carousel slide asd"
                  data-bs-ride="carousel" 
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active sex">
                    {Suggesteddd.slice(0,1).map((item) => (
        <div className="sgimg">
        <img src={item.Image} alt="" />
        <Modal/>
        </div>
        ))}
                    </div>
                    <div class="carousel-item sex">
                    {Suggesteddd.slice(1,2).map((item) => (
        <div className="sgimg">
        <img src={item.Image} alt="" />
        <Modal/>
        </div>
        ))}
                    </div>
                    <div class="carousel-item sex">
                    {Suggesteddd.slice(2,3).map((item) => (
        <div className="sgimg">
        <img src={item.Image} alt="" />
        <Modal/>
        </div>
        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="suggested-title">
                <h4>New Movie Trailer</h4>
              </div>
              <hr />

              <div className="tralier">
              {Suggesteddd.slice(2,3).map((item) => (
        <div className="sgimg">
        <img src={item.Image} alt="" />
        <Modal/>
        </div>
        ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suggested;
