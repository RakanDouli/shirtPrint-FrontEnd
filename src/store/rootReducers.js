import { combineReducers } from "redux";
import productDetails from "./productDetails/reducer";
import user from "./user/reducer";
import designer from "./designer/reducer";
import products from "./products/reducer";
import orderProductItem from "./orderproductitem/reducer";
export default combineReducers({
  designer,
  user,
  products,
  productDetails,
  orderProductItem,
});
