import phones from './mockPhones'
import categories from './mockCategories'

export const fetchPhones = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(phones);
    })
  })
}
export const fetchPhoneById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(phones.find(item => +item.id === +id));
    })
  })
}
export const findPhones = (text, category) => {
  return new Promise((resolve, reject) => {
    const compareCategory = id => {
      if(!category) {
        return true
      }
      return +category === +id;
    }
    setTimeout(() => {
      resolve(phones.filter(phone => phone.name.toLowerCase().indexOf(text.toLowerCase()) !== -1 && compareCategory(phone.categoryId)));
    })
  })
};
export const fetchCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(categories);
    })
  })
};