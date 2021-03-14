import * as COSNT from '../constants';
import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...payload],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: payload.currentCategory
      }

    default: 
      return state;
  }
}