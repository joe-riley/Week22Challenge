import { combineReducers } from "redux";
import { productsReducer as products } from "./products";
import { cartsReducer as carts } from "./carts";
import { categoriesReducer as categories } from "./categories";

export default combineReducers({
  products,
  carts,
  categories,
});
