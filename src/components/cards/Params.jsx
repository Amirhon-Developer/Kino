import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";
import "video-react/dist/video-react.css"; // import css
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Navbar from "../Navbar/Navbar";
import Header from "./Paramshead/Header"
import Footer from "../Footer/footer";
import { Player } from "video-react";
import "./params.css";


const Params = () => {
  const { data, category } = useContext(Context);
  console.log(data);

  const params = useParams();
  const item = data?.find((el) => {
    return el.id == params.id;
  });

  return (
    <>
    <Navbar />
    <Header/>
      <div className="params bg">
        <div className="containerr">
          <div className="params_bg">
            <Tabs>
              <TabList>
                <Tab>About Movie</Tab>
                <Tab>Online Watch</Tab>
              </TabList>
              <TabPanel>
                <div className="about">
                  <img className="about_img" src={item?.image} alt="" />
                  <div className="texts">
                    <h1 className="texts_h1">Title: {item?.title}</h1>
                    <p className="texts_p"> {item?.description}</p>
                    <p className="texts_p2"><span>Hour:</span> <i class="fa-regular fa-clock"></i> {item?.hours}</p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <Player>
                  <source src={item?.video} />
                </Player>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Params;
