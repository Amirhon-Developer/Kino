import React from "react";
import "./Header.css";
import bg from "../images/breadcroumb.jpg"

const Header = () => {
  return (
    <div>
      <section className="bg-red">
        <img src={bg} alt="" />
      </section>
      <div className="aboutt-text">
      <div>
      <h1>About Us</h1>
        <h2>About us</h2>
      </div>
      </div>
    </div>
  );
};

export default Header;
