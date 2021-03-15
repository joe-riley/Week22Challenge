import * as CONST from "../constants";

export default cart => ({
  type: CONST.CARTS_CLEAR_CART,
  payload: cart,
});
