import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectDesignerToken } from "../designer/selectors";
import { showMessageWithTimeout } from "../appState/actions";

export const FETCH_PRODUCT_DETAILS = "FETCH_PRODUCT_DETAILS";
export const PORODUCT_POST_SUCCESS = " PORODUCT_POST_SUCCESS";

export const productDetailsAction = (productDetails) => ({
  type: FETCH_PRODUCT_DETAILS,
  payload: productDetails,
});

export const fechproductDetails = (id, isDetailsOpen) => {
  console.log(id);
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/products/${id}`);
      // console.log("Product Details-->", response);
      dispatch(productDetailsAction(response.data.product));
    } catch (e) {
      console.log(e.message);
    }
  };
};

// create products
export const productPostSuccess = (product) => ({
  type: PORODUCT_POST_SUCCESS,
  payload: product,
});
export const postProduct = ({
  title,
  tags,
  cost,
  imageurl,
  addedcost,
  description,
}) => {
  return async (dispatch, getState) => {
    console.log("data", title, tags, cost, imageurl, addedcost, description);
    try {
      const Token = selectDesignerToken(getState());
      console.log("token", Token);
      const response = await axios.post(
        `${apiUrl}/products/`,
        {
          title,
          tags,
          cost,
          imageurl,
          addedcost,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      console.log("newproduct", response);
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "product posted successfully",
          3000
        )
      );
      dispatch(productPostSuccess(response.data.productDetails));
    } catch (e) {
      console.log(e.message);
    }
  };
};
