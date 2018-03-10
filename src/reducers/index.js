import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import BlogListReducer from './blog_list_reducer';

export default combineReducers({
    blogList: BlogListReducer,
    form: FormReducer
});