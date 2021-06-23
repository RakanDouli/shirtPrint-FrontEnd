import { FETCH_PRODUCT_DETAILS } from "./actions";
const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAILS:
      console.log(action.payload);
      return { ...action.payload };

    default:
      return state;
  }
};
export default reducer;
