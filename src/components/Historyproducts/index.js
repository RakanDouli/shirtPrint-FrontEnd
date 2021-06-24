import React, { useState } from "react";

const Historyproducts = ({
  title,
  imageurl,
  tags,
  description,
  cost,
  addedcost,
}) => {
  const [tagName, setTagName] = useState(false);
  const editHandler = (e) => {
    setTagName(true);
  };
  const cancel = () => {
    setTagName(false);
  };
  // Patch and submit
  const [editTitle, setEditTitle] = useState("");
  const [editTags, setEditTags] = useState("");
  const [editAddedcost, setEditAddedcost] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const submitHandler = () => {};

  return (
    <div className="Historyproducts">
      <div className="Image">
        <img src={imageurl} alt="" />
      </div>
      <ul className="product-info">
        <li>
          Title:
          {tagName ? (
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder={title}
              type="text"
            />
          ) : (
            <span>{title}</span>
          )}
        </li>
        <li>
          Tags:
          {tagName ? (
            <input
              value={editTags}
              onChange={(e) => setEditTags(e.target.value)}
              placeholder={tags}
              type="text"
            />
          ) : (
            <span>{tags}</span>
          )}
        </li>
        <li>
          Description:
          {tagName ? (
            <input
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              placeholder={description}
              type="text"
            />
          ) : (
            <span>{description}</span>
          )}
        </li>

        <li>
          addedcost: €
          {tagName ? (
            <input
              value={editAddedcost}
              onChange={(e) => setEditAddedcost(e.target.value)}
              placeholder={addedcost}
              type="text"
            />
          ) : (
            <span>{addedcost}</span>
          )}
        </li>
        {tagName ? (
          <p style={{ color: "red" }}>
            <strong>*NOTE:</strong> If you want to change Image url, please{" "}
            <strong>Delete</strong> this item and create new one.
          </p>
        ) : (
          ""
        )}
        <li className="buttons">
          {tagName ? (
            <>
              <input type="submit" onClick={submitHandler} />

              <button onClick={cancel}>Cancel</button>
            </>
          ) : (
            <button onClick={editHandler}>Edit</button>
          )}
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default Historyproducts;
