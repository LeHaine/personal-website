import { combineReducers } from "redux";
import { USER_EVENT } from "./github/reducer-type";
import { createFetchDataReducer } from "./utils/reducer";

// insert fetch reducers here
const fetch = combineReducers({
    userEvent: createFetchDataReducer(USER_EVENT)
});

const rootReducer = combineReducers({
    fetch: fetch
});

export default rootReducer;
