import { FETCH_PRODUCT_DETAILS } from "./actions";
const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAILS:
      return { ...action.payload };

    default:
      return state;
  }
};
export default reducer;