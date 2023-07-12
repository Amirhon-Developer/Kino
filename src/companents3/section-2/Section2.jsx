import "./Section2.css"                                             
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import img1 from "../images/forsajs1.jpg"
import img2 from "../images/forsajs2.jpg"
import img3 from "../images/forsajs3.jpg"
import Modall from "../modal/Modall"
                                                                
export default () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div className="navi-p bg">
      <div className="navigation-wrapper ">
        <div ref={sliderRef} className="keen-slider" style={{}}>
          <div className="keen-slider__slide number-slide20">
          <div className="asdf">
              <h1>Upciming Movies 2021</h1>
              <h6>The Happy Nutsracker and the <br />  Fous realms</h6>
              <p><span>Actor</span> : David Jon</p>
              <p><span>Genre</span> : Action, Drama</p>
              <p><span>Relece</span> : 10 jun 2022</p>
              <p className="me-p"><span>time</span> : 2 Hr 30 Min</p>
              <Modall/>
            </div>
            <img src={img1} alt="" />
          
          </div>
          <div className="keen-slider__slide number-slide20">
          <div className="asdf">
              <h1>Upciming Movies 2021</h1>
              <h6>The Happy Nutsracker and the <br />  Fous realms</h6>
              <p><span>Actor</span> : David Jon</p>
              <p><span>Genre</span> : Action, Drama</p>
              <p><span>Relece</span> : 10 jun 2022</p>
              <p className="me-p"><span>time</span> : 2 Hr 30 Min</p>
              <Modall/>
            </div>
            <img src={img2} alt="" />
          </div>
          <div className="keen-slider__slide number-slide20">
          <div className="asdf">
              <h1>Upciming Movies 2021</h1>
              <h6>The Happy Nutsracker and the <br />
                Fous realms</h6>
              <p><span>Actor</span> : David Jon</p>
              <p><span>Genre</span> : Action, Drama</p>
              <p><span>Relece</span> : 10 jun 2022</p>
              <p className="me-p"><span>time</span> : 2 Hr 30 Min</p>
              <Modall/>
            </div>
            <img src={img3} alt="" />
          </div>
          
        </div>
  
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}
