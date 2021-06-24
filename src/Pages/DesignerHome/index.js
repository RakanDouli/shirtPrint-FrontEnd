import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postProduct } from "../../store/productDetails/actions";
import {
  selectDesigner,
  selectDesignerToken,
} from "../../store/designer/selectors";
import { selectProducts } from "../../store/products/selectors";
import { fetchproducts } from "../../store/products/actions";
import Historyproducts from "../../components/Historyproducts";

const DesingerHome = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");

  const [imageurl, setImageurl] = useState("");
  const [addedcost, setAddedconst] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const designerToken = useSelector(selectDesignerToken);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchproducts());
    if (designerToken !== null) {
      history.push("/designer/homepage");
    }
  }, [designerToken, history, dispatch]);

  const designer = useSelector(selectDesigner);
  console.log("designer.id", designer.id);
  const products = useSelector(selectProducts);
  console.log("product", products);
  console.log(designer.id);
  const filtered = products?.filter(
    (product) => product.designerId === designer.id
  );
  console.log("fileterd", filtered);
  function uploadImage(e) {
    const files = e.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "icsb2mff");
    axios
      .post("https://api.cloudinary.com/v1_1/douli1234/image/upload", formData)
      .then((res) => {
        console.log("image cloudinary", res.data.url);
        setImageurl(res.data.url);
      });
  }
  const submitForm = (e) => {
    e.preventDefault();
    const cost = 30;
    dispatch(
      postProduct({
        title,
        imageurl,
        tags,
        description,
        cost,
        addedcost,
      })
    );
    setImageurl("");
    setTitle("");
    setAddedconst("");
    setDescription("");
    setTags("");
  };
  return (
    <div className="DesignerHome">
      <h1> Create new product</h1>
      <div className="createproduct">
        <form>
          <div>
            <label>Title :</label>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              type="text"
              placeholder="Enter title"
              required
            />
          </div>

          <div>
            <label>Tags:</label>
            <input
              value={tags}
              onChange={(event) => setTags(event.target.value)}
              type="text"
              placeholder="Example: #tag1, #tag2, ..."
              required
            />
          </div>

          <div>
            <label>Upload Image :</label>
            <input
              // value={imageurl}
              onChange={uploadImage}
              type="file"
              placeholder="File name"
            />
          </div>
          <div>
            <label>Added Cost :</label>
            <input
              value={addedcost}
              onChange={(event) => setAddedconst(parseInt(event.target.value))}
              type="number"
              placeholder="Number"
            />
          </div>
          <div>
            <label>Description :</label>
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              type="text"
              placeholder="Text"
            />
          </div>

          <div>
            <button variant="primary" type="submit" onClick={submitForm}>
              Add New Art
            </button>
          </div>
        </form>
        <div className="image">
          {imageurl ? <img src={imageurl} alt="" /> : ""}
        </div>
      </div>
      <div className="previousproducts">
        <h2>previously added items</h2>
        {!filtered
          ? ""
          : filtered.map((product) => {
              return (
                <Historyproducts
                  id={product.id}
                  title={product.title}
                  imageurl={product.imageurl}
                  tags={product.tags}
                  description={product.description}
                  cost={product.cost}
                  addedcost={product.addedcost}
                  key={product.id}
                />
              );
            })}
      </div>
    </div>
  );
};

export default DesingerHome;
