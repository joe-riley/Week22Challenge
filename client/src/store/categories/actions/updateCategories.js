import * as CONST from '../../categories';

export default category => ({
  type: CONST.CATEGORIES_UPDATE_CATEGORIES,
  payload: category,
});
