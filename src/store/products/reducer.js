import { FETCH_PRODUCTS } from "./actions";
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...action.payload];

    default:
      return state;
  }
};
export default reducer;
