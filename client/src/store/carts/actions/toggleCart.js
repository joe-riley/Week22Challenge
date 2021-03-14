export * as CONST from "../constants";

export default cart => ({
  type: CONST.CARTS_TOGGLE_CART,
  payload: cart,
});
