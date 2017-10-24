import {REMOVE_PHONE, GET_PHONE_BY_ID_SUCCESS} from '../actionTypes'
const initialState = {};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_PHONE_BY_ID_SUCCESS:
      state = payload;
      break;
    case REMOVE_PHONE:
      state = {};
      break;
  }

  return state;
}