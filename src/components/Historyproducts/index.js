import React from "react";

const Historyproducts = ({
  title,
  imageurl,
  tags,
  description,
  cost,
  addedcost,
}) => {
  return (
    <div>
      <div className="Image">
        <img src={imageurl} alt="" />
      </div>
      <ul className="product-info">
        <li>Title {title}</li>
        <li>Tag: {tags}</li>
        <li> Description:{description}</li>
        <li> cost:{cost}</li>
        <li> addedcost:{addedcost}</li>
      </ul>
    </div>
  );
};

export default Historyproducts;
