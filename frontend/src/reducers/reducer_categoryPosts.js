import { FETCH_CATEGORY_POSTS } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_CATEGORY_POSTS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}