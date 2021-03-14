import * as CONST from "../constants";

export default product => ({
  type: CONST.CARTS_ADD_TO_CART,
  payload: product,
});
