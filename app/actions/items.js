import * as types from './types'
import Api from '../lib/api'

export function fetchitems(ingredients) {
  return (dispatch, getState) => {
    const params = [
      `i=${encodeURIComponent(ingredients)}`,
      'p=1'
    ].join('&')
    // return Api.get(`/api/?${params}`).then(resp => { recipes implementation
    return Api.get(`/tasks/`).then(resp => {
      dispatch(setSearcheditems({items: resp}))
      
    }).catch( (ex) => {
      console.log(ex)
    })
  }
}

export function senditem(itemName) {
  return (dispatch, getState) => {
    const params = {
      name: itemName
    }
    // return Api.get(`/api/?${params}`).then(resp => { recipes implementation
    return Api.post(`/tasks/`, params).then(resp => {
      dispatch(setSenditem({items: resp}))
      
    }).catch( (ex) => {
      console.log(ex)
    })
  }
}

export function setSearcheditems({ items }) {
  return {
    type: types.SET_SEARCHED_ITEMS,
    items
  }
}

export function setSenditem({ items }) {
  return {
    type: types.SET_SEND_ITEM,
    items
  }
}

export function additem() {
  return {
    type: types.ADD_ITEM
  }
}