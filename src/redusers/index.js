import {combineReducers} from 'redux'

import phones from './phones'
import phone from './phone'
import busket from './busket'
import categories from './categories'
import category from './category'

export default combineReducers({
  phones,
  phone,
  busket,
  categories,
  category
});