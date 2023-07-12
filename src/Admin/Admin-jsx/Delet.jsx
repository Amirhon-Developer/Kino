import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "../../components/context/Context";

const AdminUD = () => {
    const { data, category } = useContext(Context)

  const [imageEdit, setImageEdit] = useState();
  const [videoEdit, setVideoEdit] = useState();
  const [titleEdit, setTitleEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");
  const [hoursEdit, setHoursEdit] = useState("");

  // Admin Delete
  const AdminDelete = async (_id) => {
    try {
      const res = await axios
        .delete(`https://zmovoo.zmovo.uz/api/Movies/${_id}/`)
        .then(() => window.location.reload());
      console.log("Data Deleted");
    } catch (error) {
      alert(error);
    }
  };
  // Admin Delete end

  // Edit Post
  const EditPost = async (_id) => {
    try {
      const res = await axios
        .patch(`https://zmovoo.zmovo.uz/api/Movies/${_id}/`, {
            image: imageEdit,
            video: videoEdit,
            title: titleEdit,
            description: descriptionEdit,
            hours: hoursEdit,
        })
        .then(() => window.location.reload());
    } catch (error) {
      alert(error);
    }
  };
  // Edit Post end
  return (
    <>
     
      {/* inputs */}
      <div className="users bg">
        <h1 className="h1"> ozgartirish </h1>
        <div className="qw1">
            <h6>image</h6>
            <input
              className="inputss"
              onChange={(e) => {setImageEdit(e.target.files[""])}}
              value={imageEdit}
              type="file"
              id="inputs"
            />
          </div>

          <div className="qw2">
            <h6>video</h6>
            <input
              className="inputss"
              onChange={(e) => {setVideoEdit(e.target.files[""])}}
              value={videoEdit}
              type="file"
              id="inputs"
            />
          </div>

          <div className="qw3">
            <h6>title</h6>
            <input
              className="inputs"
              type="text"
              onChange={(e) => setTitleEdit(e.target.value)}
              value={titleEdit}
              id="inputs"
            />
          </div>

          <div className="qw4">
            <h6>description</h6>
            <input
              className="inputs"
              type="text"
              onChange={(e) => setDescriptionEdit(e.target.value)}
              value={descriptionEdit}
              id="inputs"
            />
          </div>

          <div className="qw5">
            <h6>hours</h6>
            <input
              className="inputs"
              type="text"
              onChange={(e) => setHoursEdit(e.target.value)}
              value={hoursEdit}
              id="inputs"
            />
          </div>
     
      </div>
   
      {/* inputs end*/}
      <div className="bg">
        <div className="containerr ">
          <div className="header">
            {data.map((el) => {
              return (
                <div className="obshi" key={el.id}>
                  <div className="cardds" key={el.id}>
                    <div className="img">
                      <img src={el.image} className="card-img-top" alt="" />
                    </div>
                    <div className="text">
                      <h5 className="card-title">{el.title}</h5>
                      <p className="card-price">{el.hours}</p>
                    </div>

                    <div className="foot">
                      <button
                        
                        onClick={() => EditPost(el.id)}
                        className="editbtn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => AdminDelete(el.id)}
                        className="deletebtn ms-5"
                      >
                        Delete
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminUD;