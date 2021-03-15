import * as CONST from '../constants';
import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.CATEGORIES_UPDATE_CATEGORIES: return {
        ...state,
        categories: [...payload],
      };

    case CONST.CATEGORIES_UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: payload.currentCategory
      }

    default: 
      return state;
  }
}