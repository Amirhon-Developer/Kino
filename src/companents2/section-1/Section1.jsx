import React from 'react'
import "./Section1.css";
import img1 from "../images/about-img.jpg"
import s from "../images/s.png"


const Section1 = () => {
  return (
    <div className='bg'>
      <div className="containerr">
      <div className="Section1">

            <div className='Section1-text'>
               <div>
               <h1>Welcome To Our Studio</h1>
                <p>
                Proin fringilla vulputate lorem quis congue. Mauris lacinia gravida ultrices. Phasellus consectetur pellentesque. Vestibulum eu ligula cursus nisi ultrices laoreet iaculis sed lum non dolor fermentum, consequat risus non, auctor nisi. Nunc sodales blandit lum auctor nibh varius metus volutpat, et sollicitudin massa ornare. Donec rutrum urna tempor, a euismod massa porttitor. Donec at sapien non orci blandit placerat nec vitae diam dui, facilisis eget risus a, scelerisque molestie sem.
                </p>
                <p>
                Proin fringilla vulputate lorem quis congue. Mauris lacinia gravida ultrices. Phasellus consectetur pellentesque. Vestibulum eu ligula cursus nisi ultrices laoreet iaculis sed lum non dolor fermentum, consequat risus non,
                </p>
                <img src={s} alt="" />
               </div>
            </div>
           
            <div className='Section1-img'>
                <img src={img1} alt="" />
            </div>

        </div>

        <div className="coments">

            <div className='comen'>
                <h1>56,825</h1>
                <p>clients</p>
            </div>

            <div className='comen'>
                <h1>45,255</h1>
                <p>commits</p>
            </div>

            <div className='comen'>
                <h1>10,123</h1>
                <p>members</p>
            </div>

            <div className='comen'>
                <h1>1,550</h1>
                <p>first years</p>
            </div>

        </div>

      </div>
    </div>
  )
}

export default Section1