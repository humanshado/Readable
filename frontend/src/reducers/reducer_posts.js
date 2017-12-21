import { FETCH_POSTS, SHOW_POST, ADD_POST, UPVOTE_POST, DOWNVOTE_POST } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload.reduce((acc, cur) => {
                acc[cur.id] = cur;
                return acc;
            }, {});
        case SHOW_POST:
            return Object.assign({}, state, action.payload);
        case ADD_POST:
            return {
                ...state,
                [action.payload.id]:action.payload
            }
        case UPVOTE_POST:
            return {
                ...state,
                [action.payload.id]:action.payload
            }
        case DOWNVOTE_POST:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        default:
            return state;
    }
}