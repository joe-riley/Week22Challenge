import * as CONST from "../constants";

export default product => ({
  type: CONST.CARTS_REMOVE_FROM_CART,
  payload: product,
});
