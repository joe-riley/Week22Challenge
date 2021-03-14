import * as COSNT from '../constants';
import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...payload],
      };

    default: 
      return state;
  }
}