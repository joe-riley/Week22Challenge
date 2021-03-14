import * as CONST from "../constants";

export default products => ({
  type: CONST.CARTS_ADD_MULTIPLE_TO_CART,
  payload: products,
});
