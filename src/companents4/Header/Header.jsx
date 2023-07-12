import React from 'react'
import bg from "../../companents2/images/breadcroumb.jpg"
import "./Header.css"

const Header = () => {
  return (
    <div>
           <div>
        <section className="bg-red">
        <img src={bg} alt="" />
      </section>
      <div className="aboutt-text">
      <h1>MOVIE</h1>
        <h2>MOVIE</h2>
      </div>
    </div>
    </div>
  )
}

export default Header