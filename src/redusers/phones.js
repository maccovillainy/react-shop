import {FETCH_PHONES_SUCCESS, MORE_PHONES_SUCCESS, GET_PHONE_BY_ID_SUCCESS,FOUNDED_PHONES_SUCCESS} from '../actionTypes'
const initialState = [];

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      if (payload.filter.categoryId) {
        return state = payload.phones.filter(phone => +phone.categoryId === + payload.filter.categoryId)
      }
      state = [...payload.phones];
      break;
    case MORE_PHONES_SUCCESS:

      state = [...state, ...payload];
      break;
    case FOUNDED_PHONES_SUCCESS:
      state = [...payload];
      break;
  }
  return state;
}