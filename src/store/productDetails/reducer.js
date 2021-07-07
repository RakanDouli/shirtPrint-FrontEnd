import {
  FETCH_PRODUCT_DETAILS,
  PORODUCT_DELETE_SUCCESS,
  PORODUCT_PATCH_SUCCESS,
  PORODUCT_POST_SUCCESS,
} from "./actions";
const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAILS:
      return { ...action.payload };
    case PORODUCT_POST_SUCCESS:
      return { ...state, ...action.payload };
    case PORODUCT_PATCH_SUCCESS:
      console.log("action_Patch", action.state, action.payload);
      return action.payload;
    case PORODUCT_DELETE_SUCCESS:
      console.log(action.state, action.payload);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default reducer;
