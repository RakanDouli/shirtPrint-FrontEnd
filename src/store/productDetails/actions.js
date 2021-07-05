import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectDesignerToken } from "../designer/selectors";
import { showMessageWithTimeout } from "../appState/actions";

export const FETCH_PRODUCT_DETAILS = "FETCH_PRODUCT_DETAILS";
export const PORODUCT_POST_SUCCESS = " PORODUCT_POST_SUCCESS";
export const PORODUCT_PATCH_SUCCESS = " PORODUCT_PATCH_SUCCESS";
export const PORODUCT_DELETE_SUCCESS = " PORODUCT_DELETE_SUCCESS";

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
// patch///////////////////////////////

export const productPatchAction = (product) => ({
  type: PORODUCT_PATCH_SUCCESS,
  payload: product,
});

export const patchProduct = ({
  title,
  tags,
  id,
  imageurl,
  addedcost,
  description,
}) => {
  return async (dispatch, getState) => {
    console.log("data", title, tags, id, addedcost, description);
    try {
      const Token = selectDesignerToken(getState());
      console.log("token", Token);
      const response = await axios.patch(
        `${apiUrl}/products/${id}`,
        {
          title,
          tags,

          addedcost,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      console.log("eidit product==>", response);
      dispatch(
        showMessageWithTimeout(
          "patch success",
          false,
          "product edited successfully",
          3000
        )
      );
      dispatch(productPostSuccess(response.data.productDetails));
    } catch (e) {
      console.log(e.message);
    }
  };
};
// delete
export const productDeleteAction = (product) => ({
  type: PORODUCT_DELETE_SUCCESS,
  payload: product,
});
export const deleteProduct = ({ id }) => {
  return async (dispatch, getState) => {
    try {
      const Token = selectDesignerToken(getState());
      console.log("token", Token);
      const response = await axios.delete(
        `${apiUrl}/products/${id}`,

        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      console.log("eidit product==>", response);
      dispatch(
        showMessageWithTimeout(
          " deleting success",
          false,
          "product deleted successfully",
          3000
        )
      );
      dispatch(productPostSuccess(response.data.productDetails));
    } catch (e) {
      console.log(e.message);
    }
  };
};
