import { FETCH_COMMENTS, ADD_COMMENT, DELETE_COMMENT } from '../actions';

export default function (state = {}, action) {
    console.log('data received in comments reducer ', action.payload)
    switch (action.type) {
        case FETCH_COMMENTS:
            return action.payload.reduce((acc, cur) => {
                acc[cur.id] = cur;
                return acc;
            }, {});
        case ADD_COMMENT:
            return {
                ...state,
                [action.payload.id]:action.payload
            }
        case DELETE_COMMENT:
            const allComments = Object.values(state);
            const newState = allComments.filter(c => c.id !== action.payload.id)
            return newState.reduce((acc, cur) => {
                acc[cur.id] = cur;
                return acc;
            }, {});
        default:
            return state;
    }
}
