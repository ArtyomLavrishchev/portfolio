import {combineReducers, createStore} from "redux";
import {themesReducer} from "./themesReducer";

const reducer = combineReducers({
    theme: themesReducer,
});

export const store = createStore(reducer)