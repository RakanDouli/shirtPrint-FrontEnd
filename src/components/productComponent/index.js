import React, { useState } from "react";
import whiteshirt from "../../images/white-front-sweater.jpg";
import greenshirt from "../../images/green-front-sweater.jpg";
import { Link } from "react-router-dom";

import { fechproductDetails } from "../../store/productDetails/actions";
import { useDispatch } from "react-redux";

const ProductComponents = ({ id, title, imageurl, designer, tags, price }) => {
  //background choose
  function isOdd(num) {
    return num % 2;
  }
  const shirtbg = isOdd(id) ? whiteshirt : greenshirt;
  const [isDetailsOpen, setIsDetialsOpen] = useState(false);
  // loaddetails
  const dispatch = useDispatch();
  const loadProcutHandeler = (id) => {
    dispatch(fechproductDetails(id, isDetailsOpen));
    setIsDetialsOpen(true);
  };

  return (
    <Link to="" onClick={() => loadProcutHandeler(id)}>
      <div className="product">
        <div
          className="product-img"
          style={{ backgroundImage: `url(${shirtbg})` }}>
          <img className="painting" src={imageurl} alt="" loading="lazy" />
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
    </Link>
  );
};

export default ProductComponents;
