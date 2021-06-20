import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const productsAction = (products) => ({
  type: FETCH_PRODUCTS,
  payload: products,
});

export const fetchproducts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/products`);
      // console.log("All products -->", response);
      dispatch(productsAction(response.data.products));
    } catch (e) {
      console.log(e.message);
    }
  };
};
