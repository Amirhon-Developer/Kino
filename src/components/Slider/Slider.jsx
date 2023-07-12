import React, { Component } from "react";
import "./Slider.css";
import bg1 from "../images/forsajbg1.jpg"
import bg2 from "../images/forsajbg2.jpg"
import Modaldiv from "../modaldiv/Modaldiv";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      isShowing: false,
      dota: true
    };
  }
  toggle = () => {
    this.setState({
      collapsed: this.state.collapsed,
    });
  };

  openModalHandler = () => {
    this.setState({
      isShowing: true,
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false,
    });
  };

  render() {
    let collapsed = this.state.collapsed;
    return (
      <section>
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={bg1} class="d-block w-100" alt="..." />
              <div className="item-text ">
              
                <h6>Rebort Action Story 5</h6>
                <p className="actor1">
                  {" "}
                  <span className="actor">Actor:</span> David Jon
                </p>
                <p>
                  <span className="actor">Genre:</span>Action, Drama{" "}
                </p>
                 
                  <Modaldiv />
              </div>
            </div>
            <div class="carousel-item ">
              <img src={bg2} class="d-block w-100" alt="..." />
              <div className="item-text">
             
                <h6>Action Hindi Rebort Story</h6>
                <p className="actor1">
                  <span className="actor">Actor:</span> David Jon
                </p>
                <p>
                  <span className="actor">Genre:</span>Action, Drama
                </p>

                  <Modaldiv />
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    );
  }
}

export default Slider;
