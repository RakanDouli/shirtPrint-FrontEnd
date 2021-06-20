import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fechproductDetails } from "../../store/productDetails/actions";
import { selectProductDetails } from "../../store/productDetails/selectors";
import { useParams } from "react-router-dom";
import greyshirt from "../../images/grey-folded-t-shirt.jpg";
import whiteshirt from "../../images/folded-white.jpg";
import { FiShoppingCart } from "react-icons/fi";
const ProductDetail = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector(selectProductDetails);
  console.log(productDetails.id);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fechproductDetails(id));
  }, [dispatch, id]);

  // shirt chose
  function isOdd(num) {
    return num % 2;
  }
  const shirtbg = isOdd(productDetails.id) ? whiteshirt : greyshirt;

  return (
    <section className="productDetails">
      {productDetails && (
        <>
          <div className="closebtn">x</div>
          <div
            className="image "
            style={{ backgroundImage: `url(${shirtbg})` }}>
            <img src={productDetails.imageurl} alt="" loading="lazy" />
          </div>
          <div className="details">
            <div class="product-info">
              <h1>Title {productDetails.title}</h1>
              <h2>Designer: {productDetails.designer?.name}</h2>
              <p>Tag: {productDetails.tags}</p>
              <h3> Description:</h3>
              <p> {productDetails.description}</p>
            </div>
            <div className="typeselector">
              <label htmlFor="type">Type</label>
              <select id="type">
                <option value="" disabled>
                  Select
                </option>
                <option value="Short-sleeves">Short Sleeves</option>
                <option value="Hoodies">Hoodies</option>
                <option value="Long-sleeves">Long sleeves</option>
                <option value="Raglan-sleeves">Raglan Sleeves</option>
              </select>
            </div>
            <div className="colorselector">
              <label htmlFor="color">Color</label>
              <select id="color">
                <option value="" disabled>
                  Select
                </option>
                <option value="White">White</option>
                <option value="Grey">Grey</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Orange">Orange</option>
                <option value="Yellow">Yellow</option>
              </select>
            </div>
            <div className="sizeselector">
              <label htmlFor="size">size</label>
              <select id="color" name="size">
                <option value="" disabled>
                  Select
                </option>
                <option value="XS">Xs</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div className="price-add">
              <button>
                + <FiShoppingCart />
              </button>
              <h1> € {productDetails.cost + productDetails.addedcost}</h1>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductDetail;
