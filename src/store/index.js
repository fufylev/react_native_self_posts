import { createStore, combineReducers, applyMiddleware } from 'redux';
import { postReducer } from './reducers/post';
import thunk from 'redux-thunk';

const roorReducer = combineReducers({
    post: postReducer,
});

export default createStore(roorReducer, applyMiddleware(thunk));