import * as types from './types';
import Api from '../lib/api'

export function fetchRecipes(ingredients) {
  return (dispatch, getState) => {
    console.log(getState());
    const params = [
      `i=${encodeURIComponent(ingredients)}`,
      'p=1'
    ].join('&')
    // return Api.get(`/api/?${params}`).then(resp => { recipes implementation
    return Api.get(`/tasks/`).then(resp => {
      dispatch(setSearchedRecipes({recipes: resp}));
      
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setSearchedRecipes({ recipes }) {
  return {
    type: types.SET_SEARCHED_RECIPES,
    recipes
  }
}

export function addRecipe() {
  return {
    type: types.ADD_RECIPE
  }
}