import {fetchPhones, fetchPhoneById, findPhones, fetchCategories} from '../api/fetchPhones'
import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_ERROR,
  MORE_PHONES_START,
  MORE_PHONES_SUCCESS,
  MORE_PHONES_ERROR,
  GET_PHONE_BY_ID_START,
  GET_PHONE_BY_ID_SUCCESS,
  GET_PHONE_BY_ID_ERROR,
  ADD_PHONE_TO_BUSKET,
  REMOVE_PHONE,
  FOUNDED_PHONES_SUCCESS,
  FOUNDED_PHONES_START,
  FOUNDED_PHONES_ERROR,
  GET_CATEGORIES_PHONES_SUCCESS,
  GET_CATEGORIES_PHONES_START,
  GET_CATEGORIES_PHONES_ERROR,
  ACTIVE_CATEGORY,
  CLEAN_BUSKET,
  DELETE_PHONE_FROM_BUSKET
} from '../actionTypes'

export const getPhones = (filter) => {
  return dispatch => {

    dispatch({
      type: FETCH_PHONES_START,
    });
    if (filter && filter.categoryId) {
      dispatch({
        type: ACTIVE_CATEGORY,
        payload: filter.categoryId
      });
    } else {
      dispatch({
        type: ACTIVE_CATEGORY,
        payload: false
      });
    }
    fetchPhones().then(phones => {
      dispatch({
        type: FETCH_PHONES_SUCCESS,
        payload: {
          phones,
          filter
        }
      })
    }).catch(error => {
      dispatch({
        type: FETCH_PHONES_ERROR,
        payload: error,
        error: true
      })
    })
  };
}
export const loadMore = () => {
  return dispatch => {
    dispatch({
      type: MORE_PHONES_START,
    });
    fetchPhones().then(phones => {
      dispatch({
        type: MORE_PHONES_SUCCESS,
        payload: phones
      })
    }).catch(error => {
      dispatch({
        type: MORE_PHONES_ERROR,
        payload: error,
        error: true
      })
    })
  };
}

export const getPhoneById = (id) => {
  return dispatch => {
    dispatch({
      type: GET_PHONE_BY_ID_START,
    });
    fetchPhoneById(id).then(phone => {
      dispatch({
        type: GET_PHONE_BY_ID_SUCCESS,
        payload: phone
      })
    }).catch(error => {
      dispatch({
        type: GET_PHONE_BY_ID_ERROR,
        payload: error,
        error: true
      })
    })
  };
};

export const toBusket = phone => dispatch => {
  dispatch({
    type: ADD_PHONE_TO_BUSKET,
    payload: phone
  })
};
export const cleanBasket = phone => dispatch => {
  dispatch({
    type: CLEAN_BUSKET
  })
};
export const deleteItem = id => dispatch => {
  dispatch({
    type: DELETE_PHONE_FROM_BUSKET,
    payload: id
  })
};

export const find = (text, category) => dispatch => {
  dispatch({
    type: FOUNDED_PHONES_START
  });
  findPhones(text, category).then(phones => {
    dispatch({
      type: FOUNDED_PHONES_SUCCESS,
      payload: phones
    })
  })
};
export const getCagegories = () => dispatch => {
  dispatch({
    type: GET_CATEGORIES_PHONES_START
  });
  fetchCategories().then(categories => {
    dispatch({
      type: GET_CATEGORIES_PHONES_SUCCESS,
      payload: categories
    })
  })
};



export const removePhone = phone => ({type: REMOVE_PHONE});
