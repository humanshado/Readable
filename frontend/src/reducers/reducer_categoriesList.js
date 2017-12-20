import { FETCH_CATEGORIES } from '../actions';

export default function (state = {}, action){
    console.log('data received in categoriesList reducer ', action);
    switch(action.type){
        case FETCH_CATEGORIES:
            return {...action.payload.categories};
        default:
            return state;
    }
}