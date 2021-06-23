import { combineReducers } from "redux";
import productDetails from "./productDetails/reducer";
import user from "./user/reducer";
import designer from "./designer/reducer";
import products from "./products/reducer";
// import artworkDetails from "./artworkDetails/reducer";

export default combineReducers({
  designer,
  user,
  products,
  productDetails,
  //   artworkDetails,
});
