import {combineReducers} from 'redux';
import {postReducer} from "./postReducer";
import {appReducer} from "./appReduser";
export const rootReducer=combineReducers({
    posts:postReducer,
    app:appReducer
});