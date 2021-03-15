import * as CONST from "../constants";

export default cart => ({
  type: CONST.CARTS_UPDATE_CART_QUANTITY,
  payload: cart,
});
