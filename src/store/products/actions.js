import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const productsAction = (artworks) => ({
  type: FETCH_PRODUCTS,
  payload: artworks,
});

export const fetchproducts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/products`);
      console.log(response);
      dispatch(productsAction(response.data.products));
    } catch (e) {
      console.log(e.message);
    }
  };
};
