import {ADD_PHONE_TO_BUSKET, CLEAN_BUSKET, DELETE_PHONE_FROM_BUSKET} from '../actionTypes'
const initialState = {
  count: 0,
  sum: 0,
  phones: []
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PHONE_TO_BUSKET:
      let
        exist = false,
        phones;
      if (!state.phones.length) {
        payload.count = 1;
        phones = [payload];
        exist = true;
      } else {
        phones = state.phones.map(phone => {
          if (+phone.id === +payload.id) {
            phone.count = phone.count ? phone.count + 1 : 1;
            phone.price += phone.price;
            exist = true;
          }
          return phone;
        });
      }

      console.log(phones)
      console.log(phones.reduce((sum, curr) => {
        return sum + curr.price
      }, 0))
      if (!exist) {
        payload.count = 1;
        phones.push(payload);
      }
      state = {
        ...state,
        count: state.count + 1,
        sum: phones.reduce((sum, curr) => {
          return sum + curr.price
        }, 0),
        phones
      };
      break;
    case CLEAN_BUSKET:
      state = initialState;
      break;
    case DELETE_PHONE_FROM_BUSKET:
      let phone = state.phones.find(phone => +phone.id === +payload);
      state = {
        ...state,
        count: state.count - 1,
        sum: state.sum - phone.price/phone.count,
        phones: state.phones.filter(phone => {
          if (+phone.id === +payload) {
            if (phone.count > 1) {
              phone.price -= phone.price / phone.count;
              phone.count -= 1;
            } else {
              return false
            }
          }
          return true
        })
      };
      break
  }
  return state;
}