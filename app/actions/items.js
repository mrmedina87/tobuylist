import * as types from './types';
import Api from '../lib/api'

export function fetchitems(ingredients) {
  return (dispatch, getState) => {
    console.log(getState());
    const params = [
      `i=${encodeURIComponent(ingredients)}`,
      'p=1'
    ].join('&')
    // return Api.get(`/api/?${params}`).then(resp => { items implementation
    return Api.get(`/tasks/`).then(resp => {
      dispatch(setSearcheditems({items: resp}));
      
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setSearcheditems({ items }) {
  return {
    type: types.SET_SEARCHED_ITEMS,
    items
  }
}

export function additem() {
  return {
    type: types.ADD_ITEM
  }
}