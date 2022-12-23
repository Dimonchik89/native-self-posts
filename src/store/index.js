import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "./reducers/post";

const rootRedicer = combineReducers({
    post: postReducer
})

export default createStore(rootRedicer, applyMiddleware(thunk))