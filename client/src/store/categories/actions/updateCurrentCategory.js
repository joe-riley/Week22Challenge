import * as CONST from '../../categories';

export default category => ({
  type: CONST.CATEGORIES_UPDATE_CURRENT_CATEGORY,
  payload: category,
});
