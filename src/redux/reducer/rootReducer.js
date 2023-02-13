import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { multiReducer } from "./multiReducer";

export const rootReducer = combineReducers({
    counter:counterReducer,
    multi:multiReducer
});