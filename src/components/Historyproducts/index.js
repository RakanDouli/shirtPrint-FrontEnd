import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  patchProduct,
} from "../../store/productDetails/actions";

const Historyproducts = ({
  title,
  id,
  imageurl,
  tags,
  description,

  addedcost,
}) => {
  console.log(id);
  const [tagName, setTagName] = useState(false);
  const dispatch = useDispatch();
  const editHandler = (e) => {
    setTagName(true);
    console.log("clicked");
  };
  const cancel = () => {
    setTagName(false);
  };
  // Patch and submit
  const [editTitle, setEditTitle] = useState(title);
  const [editTags, setEditTags] = useState(tags);
  const [editAddedcost, setEditAddedcost] = useState(addedcost);
  const [editDescription, setEditDescription] = useState(description);
  const submitHandler = () => {
    dispatch(
      patchProduct({
        title: editTitle,
        tags: editTags,
        id,
        addedcost: parseInt(editAddedcost),
        description: editDescription,
      })
    );

    setTagName(false);

    window.location.reload();
  };

  // delete
  const [deleteconfirm, setDeleteConfirm] = useState(false);

  const deleteHandler = (e) => {
    dispatch(deleteProduct({ id }));
    window.location.reload();
  };
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

          <button onClick={(e) => setDeleteConfirm(true)}>Delete</button>
        </li>
      </ul>
      <div
        className="deletewarn"
        style={deleteconfirm ? { display: "block" } : { display: "none" }}>
        <div
          className="closebg"
          style={deleteconfirm ? { display: "flex" } : { display: "none" }}>
          <h3>
            Are you sure you want to <span>DELETE</span> this?
          </h3>
          <div>
            <button onClick={deleteHandler}>Delete</button>
            <button onClick={(e) => setDeleteConfirm(false)}>
              Cancel
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historyproducts;
