import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer"
import blogReducer from "./blogReducer";

const rootReducer = combineReducers({
    blog: blogReducer,
    filter: filterReducer
})

export default rootReducer;