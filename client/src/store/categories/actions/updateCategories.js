import * as CONST from '../constants';

export default category => ({
  type: CONST.CATEGORIES_UPDATE_CATEGORIES,
  payload: category,
});
