import * as COSNT from '../constants';
import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case COSNT.CARTS_ADD_MULTIPLE_TO_CART:
      return { 
        ...state,
        cart: [...state.cart, ...payload],
      };

    case COSNT.CARTS_ADD_TO_CART:
      return { 
        ...state,
        cartOpen: true,
        cart: [...state.cart, payload],
      };

    case COSNT.CARTS_CLEAR_CART:
      return { 
        ...state,
        cartOpen: false,
        cart: [],
      };

    case COSNT.CARTS_REMOVE_FROM_CART:
      let newState = state.cart.filter(product => {
        return product._id !== payload._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case COSNT.CARTS_TOGGLE_CART:
      return { 
        ...state,
        cartOpen: !state.cartOpen,
      };

    case COSNT.CARTS_UPDATE_CART_QUANTITY:
      return { 
        ...state,
        cartOpen: true,
        cart: state.cart.map(product => {
          if (payload._id === product._id) {
            product.purchaseQuantity = payload.purchaseQuantity
          }
          return product;
        })
      };

    default: 
      return state;
  }
}