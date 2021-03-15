import * as CONST from '../constants';
import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.PRODUCTS_UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...payload],
      };

    default: 
      return state;
  }
}