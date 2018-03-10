import _ from 'lodash';
import { FETCH_BLOG_LIST, FETCH_BLOG_POST, DELETE_POST_ACTION } from "../actions";

export default function (state = {}, action) {
    switch (action.type) {

        case DELETE_POST_ACTION: 
            console.log('state', state);
            return _.omit(state, action.payload);

        case FETCH_BLOG_LIST:
            return _.mapKeys(action.payload.data, 'id');

        case FETCH_BLOG_POST:
            const { data } = action.payload;

            if (data) {
                return { ...state, [data.id]: data };
            }
    }

    return state;
}