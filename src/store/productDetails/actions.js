import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_PRODUCT_DETAILS = "FETCH_PRODUCT_DETAILS";

export const productDetailsAction = (productsDetails) => ({
  type: FETCH_PRODUCT_DETAILS,
  payload: productsDetails,
});

export const fechproductDetails = (id, isDetailsOpen) => {
  console.log(id);
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/products/${id}`);
      console.log("Product Details-->", response);
      dispatch(productDetailsAction(response.data.product));
    } catch (e) {
      console.log(e.message);
    }
  };
};
