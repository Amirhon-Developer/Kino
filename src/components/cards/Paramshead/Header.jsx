import React from "react";
import bg from "../../images/bg.jpg"

const Header = () => {
  return (
    <div>
      <section className="bg-red">
        <img src={bg} alt="" />
      </section>
      <div className="aboutt-text">
      <div>
      <h1></h1>
        <h2></h2>
      </div>
      </div>
    </div>
  );
};

export default Header;