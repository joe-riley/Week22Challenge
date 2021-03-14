import * as CONST from "../constants";

export default product => ({
  type: CONST.PRODUCTS_UPDATE_PRODUCTS,
  payload: product,
});
