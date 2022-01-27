import { combineReducers } from "@reduxjs/toolkit";
import reposReducer from "./repos.reducer";
import profilReducer from "./profile.reducer"

const rootReducer = combineReducers({
    repos: reposReducer,
    profile: profilReducer,
});

export default rootReducer;