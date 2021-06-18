import React from "react";

const ProductComponents = ({ id, title, imageurl, designer, tags, price }) => {
  return (
    <div class="product">
      <div className="product-img">
        <img src={imageurl} alt="" />
      </div>

      <div className="product-info">
        <div className="text">
          <h2>Title:{title}</h2>
          <h4>By: {designer}</h4>
          <p>{tags}</p>
        </div>
        <h1>€ {price}</h1>
      </div>
    </div>
  );
};

export default ProductComponents;
