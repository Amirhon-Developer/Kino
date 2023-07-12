import axios from "axios";
import React, { useState } from "react";
import Card from "../../components/cards/Card"
import Delet from "../Admin-jsx/Delet"
import "./Admin.css";

const Post = () => {
  const [image, setImage] = useState();
  const [video, setVideo] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState("");

  const handlerClick = () => {
    axios
      .post("https://zmovoo.zmovo.uz/api/Movies/", {
        image: image,
        video: video,
        title: title,
        description: description,
        hours: hours
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    setImage();
    setVideo();
    setTitle("");
    setDescription("");
    setHours("");
  };
  return (
    <div>
      <div className="bg gb">
        <div className="containerr ">
          <h2>Welcome Djamilov</h2>

          <div className="qw1">
            <h6>image</h6>
            <input
              className="inputss"
              onChange={(e) => {setImage(e.target.files[""])}}
              value={image}
              type="file"
              id="inputs"
            />
          </div>

          <div className="qw2">
            <h6>video</h6>
            <input
              className="inputss"
              onChange={(e) => {setVideo(e.target.files[""])}}
              value={video}
              type="file"
              id="inputs"
            />
          </div>

          <div className="qw3">
            <h6>title</h6>
            <input
              className="inputs"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              id="inputs"
            />
          </div>

          <div className="qw4">
            <h6>description</h6>
            <input
              className="inputs"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              id="inputs"
            />
          </div>

          <div className="qw5">
            <h6>hours</h6>
            <input
              className="inputs"
              type="text"
              onChange={(e) => setHours(e.target.value)}
              value={hours}
              id="inputs"
            />
          </div>

          <div className="qw6">
            <h6>Category</h6>
            <select class="form-control" name="category">
              <option value="" selected="">
                --------
              </option>
              <option value="1">Horror</option>
              <option value="2">Anime</option>
              <option value="3">Action</option>
              <option value="4">Fantastic</option>
            </select>
          </div>

          <button disabled={!hours} className="add" onClick={() => handlerClick()}>
            Add
          </button>
        </div>
       <Delet/>
      </div>
    </div>
  );
};

export default Post;
