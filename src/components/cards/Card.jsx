import React from "react";
import "./Card.css";
import { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from 'react-router-dom'


const Card = () => {
  const { data, category } = useContext(Context)

  console.log(data);
  return (
    <div className="bg">
      
      <div className="cards containerr">
      <div className="suggested-title">
                <h4>Movies</h4>
              </div>
              <hr />
        <div class="obshi ">
        {data?.slice(0,100).map((el) => {

          return(
            <div className="cardds" key={el.id}>
            <Link to={`/card/${el.id}`}>
            <div className="img">
              <img src={el.image}></img>
            </div>
            </Link>
            <div className="text">
              <div>
                <h6>{el.title}</h6>
              </div>
            </div>
          </div>
          )
        }
          )}
        

        </div>

        <div className="btn070">
          <div className="i">
            <Link to="/movies">
            <button>
              View All <i class="fa-sharp fa-solid fa-angle-right"></i>
            </button>
            </Link>
          </div>
          <div>
          <Link to="/movies">
            <button className="i ii">
              View All <i class="fa-sharp fa-solid fa-angle-right"></i>
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
