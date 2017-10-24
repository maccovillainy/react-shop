import {GET_CATEGORIES_PHONES_SUCCESS} from '../actionTypes'
const initialState = [];

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_CATEGORIES_PHONES_SUCCESS:
      state = payload;
      break;
  }
  return state;
}