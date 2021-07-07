import { ORDERPRODUCTITEM_POST_SUCCESS } from "./actions";
const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDERPRODUCTITEM_POST_SUCCESS:
      console.log("state", state);
      return [...action.payload];
    default:
      return state;
  }
};
export default reducer;
