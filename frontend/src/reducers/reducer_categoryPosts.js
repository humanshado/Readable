import { FETCH_CATEGORY_POSTS, UPVOTE_POST, DOWNVOTE_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_CATEGORY_POSTS:
            return Object.assign({}, state, action.payload);
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