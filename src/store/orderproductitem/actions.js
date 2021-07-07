import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";
import { showMessageWithTimeout } from "../appState/actions";
export const ORDERPRODUCTITEM_POST_SUCCESS = "ORDERPRODUCTITEM_POST_SUCCESS";

export const orderProductItemAction = (orderProductItem) => ({
  type: ORDERPRODUCTITEM_POST_SUCCESS,
  payload: orderProductItem,
});

export const postOrderProductItem = ({
  size,
  color,
  type,
  quantity,
  productId,
}) => {
  return async (dispatch, getState) => {
    console.log("data", size, color, type, quantity, productId);
    try {
      const Token = selectToken(getState());
      // console.log("token", Token);
      const response = await axios.post(
        `${apiUrl}/orderproductitems/`,
        {
          size,
          color,
          type,
          quantity,
          productId,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      console.log("new orderProductItem", response);
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "product posted successfully",
          3000
        )
      );
      dispatch(orderProductItemAction(response.data.neworders));
    } catch (e) {
      console.log(e.message);
    }
  };
};
