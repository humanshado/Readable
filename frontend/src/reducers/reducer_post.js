import { FETCH_POST, EDIT_DETAIL_POST, UPVOTE_POST, DOWNVOTE_POST, DELETE_POST } from '../actions';


export default function (state = {}, action) {
    console.log('action in posts ', action)
    switch (action.type) {
        case FETCH_POST:
            return Object.assign({}, state, action.payload);
        case EDIT_DETAIL_POST:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case UPVOTE_POST:
            return Object.assign({}, state, action.payload)
        case DOWNVOTE_POST:
            return Object.assign({}, state, action.payload)
        case DELETE_POST:
            const allPosts = Object.values(state);
            const newState = allPosts.filter(p => p.id !== action.payload.id)
            return newState.reduce((acc, cur) => {
                acc[cur.id] = cur;
                return acc;
            }, {});
        default:
            return state;
    }
}