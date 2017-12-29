import { FETCH_CATEGORIES, SET_CATEGORY_FILTER } from '../actions';

export default function (state = {}, action){
    //console.log('data received in categoriesList reducer ', action);
    switch(action.type){
        case FETCH_CATEGORIES:
            return {...action.payload.categories}
        case SET_CATEGORY_FILTER:
            return { ...action.payload }
        default:
            return state;
    }
}