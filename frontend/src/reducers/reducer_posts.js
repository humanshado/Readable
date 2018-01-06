import _ from 'lodash';
import { FETCH_POSTS, ADD_POST, EDIT_POST, UPVOTE_POST, DOWNVOTE_POST, DELETE_POST } from '../actions';


export default function (state = {}, action) {
    console.log('action in posts ', action)
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload.reduce((acc, cur) => {
                acc[cur.id] = cur;
                return acc;
            }, {});
        case ADD_POST:
            return {
                ...state,
                [action.payload.id]:action.payload
            }
        case EDIT_POST:
            const otherPosts = Object.values(state).filter(p => p.id !== action.payload.id)
                .reduce((acc, curr) => {
                    acc[curr.id] = curr
                    return acc
                }, {})
            return {
                ...otherPosts,
                [action.payload.id]:action.payload
            }
           
        case UPVOTE_POST:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case DOWNVOTE_POST:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case DELETE_POST:
            const allPosts = Object.values(state);
            let newState = allPosts.filter(p => p.id !== action.payload.id)
            return newState.reduce((acc, cur) => {
                acc[cur.id] = cur;
                return acc;
            },{});
        default:
            return state;
    }
}