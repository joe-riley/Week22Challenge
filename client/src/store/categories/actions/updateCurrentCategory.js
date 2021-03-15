import * as CONST from '../constants';

export default category => ({
  type: CONST.CATEGORIES_UPDATE_CURRENT_CATEGORY,
  payload: category,
});
