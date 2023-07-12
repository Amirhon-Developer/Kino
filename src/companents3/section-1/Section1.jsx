import "./Section1.css"
import img1 from "../images/trailer.jpg"
import img2 from "../images/trailer-2.jpg"
import img3 from "../images/trailder3.jpg"
import img4 from "../images/trailer4.jpg"
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    dots: true,
  })

  return (
<div className="bg">
<div className=" slider-obshi containerr ">

<div className="ssss">
      <div ref={sliderRef} className="keen-slider" style={{ }} >
      
      <div className="keen-slider__slide number-slide1">
      <button className="premium">premium</button>
          <img src={img1} alt="" />
      </div>

      <div className="keen-slider__slide number-slide1">
      <button className="premium">premium</button>
      <img src={img2} alt="" />
      </div>
    </div>
  </div>

<div className="scsl">
<div className="sssss">
      <div  className="keen-sliderrr"  >


      <div className="number-slide33">
  
          <img src={img3} alt="" />
    
   
      </div>

   

    </div>


    <div className="trailer-slid">

     <div>
     <h1> 
       Hurry Animate Blue Strack 
       New Movie (2018)
      </h1>
      <p className="trailer-icon">
        <span > 
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </span> 6/5 Ratitng</p>
     </div>


          <div className="trailer-slid2">
          <p><span>Category :</span> English Animation Movies</p>
      <p><span>Genre :</span> Drama, Action Releas</p>
      <p><span>Actor :</span> Priti Kapel, Justin Orjun</p>
      <p><span>Release :</span> 20 Jun 2022</p>
      <p><span>Languase :</span> English</p>
      <p className="trailer-icon2">
        <span>SHARE :</span>
        <i class="i fa-brands fa-facebook">
        <i class="i fa-brands fa-twitter"></i>
        <i class="i fa-brands fa-telegram"></i>
        <i class="i fa-brands fa-instagram"></i>
        </i>
        </p>
          </div>

 
        </div>
  </div>  
  </div> 


  <div className="trailer-text">

    <h1>Movie Story</h1>

    <p>
      We’ve been a strategy thought leader for nearly five decades and we bring But we ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt labore Proin fringilla porttitor eros, auctor facilisis neque fringilla eu. Nulla vitae ultrices justo. Quisque in risus vitae enim fermentum condimentum. Donec eleifend consequat nulla sed faucibus. Etiam sit amet ex ut eros dignissim consequat in non risus. Sed placerat eget diam lobortis mollis. Curabitur at dui vel mauris laoreet euismod ac at nibh. Proin orci sapien, posuere eget hendrerit non, maximus et erat. Curabitur et semper nunc. Cras ultrices pulvinar leo id ultrices. Aenean interdum tempor diam, vel porttitor tellus facilisis ut. Nulla aliquet turpis augue, quis. interdum lectus lobortis eu. Nulla ornare mauris ac congue cursus.
   </p>

<p>
interdum lectus lobortis eu. Nulla ornare mauris ac congue cursus. Donec eu urna sodales, feugiat urna quis, pretium augue. Donec vel massa nec metus dapibus dignissim. Curabitur at nisi mattis, vestibulum enim at, dictum eros. Pellentesque sed arcu et elit mattis pulvinar. Suspendisse et risus lacinia nunc auctor cursus ac sed ipsum. Duis fringilla, tellus eget hendrerit posuere, nisi quam pretium justo, sed consectetur dui felis sit amet dui. Donec luctus dapibus scelerisque. Quisque turpis tortor, venenatis eget mattis ac, viverra sit amet libero. In ut libero sapien. Nam non venenatis mi, vel sodales augue. Donec fringilla nisi vel est placerat, sed tempor est venenatis. Donec non sollicitudin felis. Donec eu urna sodales, feugiat urna quis, pretium augue. Donec vel massa nec.
</p>

  </div>


  
</div>
</div>
  )
}


