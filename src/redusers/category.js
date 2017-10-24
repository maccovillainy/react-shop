import {ACTIVE_CATEGORY} from '../actionTypes'
const initialState = false;

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ACTIVE_CATEGORY:
      state = payload;
      break;
  }
  return state;
}