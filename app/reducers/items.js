import createReducer from "../lib/createReducer"
import * as types from "../actions/types"

export const searcheditems = createReducer({}, {
  [types.SET_SEARCHED_ITEMS](state, action) {
    let newState= {}
    action.items.forEach( (item) => {
      newState[item.id] = item
    })
    return newState
  }
})

export const itemCount = createReducer(0, {
  [types.SET_SEARCHED_ITEMS](state, action) {
    return action.items.length 
  },
  [types.ADD_ITEM](state, action) {
    return state + 1 
  }
})