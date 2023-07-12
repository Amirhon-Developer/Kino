import React from "react";
import "./Section1.css";
import Section2 from "../Section-2/Section2";
import { useContext } from "react";
import { Context } from "../../components/context/Context";
import { Link } from "react-router-dom";

const Section1 = () => {
  const [loadedData, setLoadedData] = React.useState(3);
  const { data, category, searchText, dataSearch, mura } = useContext(Context);

  return (
    <div className="bg">
      <div className=" containerr qwerty">
      <div class="ssex">
        <div class="pagenation ">
          {dataSearch?.slice(0, 100).map((el) => {
            return (
              <div className="cardd" key={el.id}>
                <Link to={`/card/${el.id}`}>
                  <div className="imgg">
                    <img className="card-img-top" src={el.image}></img>
                  </div>
                </Link>
                <div className="text">
                  <div>
                    <h6 className="texts_h1">Title: {el.title}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="loaded-btn">
          <button
            onClick={() => setLoadedData((prev) => prev + 3)}
            style={{ display: loadedData === data.length ? "none" : null }}
          >
            Загрузить еще
          </button>
        </div>
      </div>

      <div>
        <div className="search">
          <div>
            <input type="text" value={mura} 
            onChange={searchText.bind(this)}
            />
          </div>
          <div>
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Section1;
