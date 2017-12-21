import { FETCH_COMMENTS, ADD_COMMENT } from '../actions';

export default function (state = {}, action) {
    //console.log('data received in comments reducer ', action.payload)
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
        default:
            return state;
    }
}
