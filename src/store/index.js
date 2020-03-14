import { createStore, combineReducers } from 'redux';
import { postReducer } from './reducers/post';

const roorReducer = combineReducers({
    post: postReducer,
});

export default createStore(roorReducer);