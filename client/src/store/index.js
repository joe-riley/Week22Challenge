import { createStore } from "redux";
import rootReducer from "./rootReducer";

export * from "./products";
export * from "./categories";
export * from "./carts";

export default createStore(
  rootReducer,
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);
