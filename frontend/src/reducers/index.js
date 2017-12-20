import { combineReducers } from 'redux';
import CategoriesListReducer from './reducer_categoriesList';
import PostsReducer from './reducer_posts';
import CategoryPostsReducer from './reducer_categoryPosts';
import CommentsReducer from './reducer_comments';
import { reducer as formReducer }  from 'redux-form';

const rootReducer = combineReducers({
    categories: CategoriesListReducer,
    posts: PostsReducer,
    CategoryPosts: CategoryPostsReducer,
    comments: CommentsReducer,
    form: formReducer
});

export default rootReducer;