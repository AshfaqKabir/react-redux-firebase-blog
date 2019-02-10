import { combineReducers } from "redux";
import postReducer from './PostReducer'
import commentReducer from './CommentReducer'


export const rootReducer = combineReducers({
  post: postReducer,
  comment: commentReducer
});
