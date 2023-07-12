import React from "react";
import "./Bagvideo.css"
import bgvideo from "../video/blackadam.mp4"

const Bagvideo = () => {
  return (



<div className="main">
    <video src={bgvideo} autoPlay  loop muted />
  </div>
       


  );
};

export default Bagvideo;
