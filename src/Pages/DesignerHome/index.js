import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postProduct } from "../../store/productDetails/actions";
import { selectDesignerToken } from "../../store/designer/selectors";

const DesingerHome = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [selectImage, setSelectImage] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [addedcost, setAddedconst] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const designerToken = useSelector(selectDesignerToken);
  const history = useHistory();

  useEffect(() => {
    if (designerToken !== null) {
      history.push("/designer/homepage");
    }
  }, [designerToken, history]);

  function submitForm(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectImage);
    formData.append("upload_preset", "icsb2mff");
    axios
      .post("https://api.cloudinary.com/v1_1/douli1234/image/upload", formData)
      .then((res) => {
        console.log("image cloudinary", res);
        setImageurl(res.data.url);
      });
    const cost = 30;
    console.log("data", title, imageurl, tags, description, cost, addedcost);
    dispatch(postProduct(title, imageurl, tags, description, cost, addedcost));
    setImageurl("");
    setTitle("");
    setAddedconst("");
    setDescription("");
    setTags("");
  }
  return (
    <div className="DesignerHome">
      <div className="add">
        <form>
          <h1> Share your art</h1>
          <div>
            <label>Title :</label>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              type="text"
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label>Tags: Example(ex#tag1, #tag2, ...)</label>
            <input
              value={tags}
              onChange={(event) => setTags(event.target.value)}
              type="text"
              placeholder="E.g.: ex#tag1, #tag2, ..."
              required
            />
          </div>

          <div>
            <label>Upload Image :</label>
            <input
              // value={imageurl}
              onChange={(e) => setSelectImage(e.target.files[0])}
              type="file"
              placeholder="File name"
              required
            />
          </div>
          <div>
            <label>Added Cost :</label>
            <input
              value={addedcost}
              onChange={(event) => setAddedconst(event.target.value)}
              type="number"
              placeholder="Number"
              required
            />
          </div>
          <div>
            <label>Description :</label>
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              type="text"
              placeholder="Text"
              required
            />
          </div>
          <img src={imageurl} alt="" />
          <div>
            <button variant="primary" type="submit" onClick={submitForm}>
              Add New Art
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DesingerHome;
