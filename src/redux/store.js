import { combineReducers, createStore } from "@reduxjs/toolkit";
import profileReducer from "./profile/profile.reducer";

// Creating the root reducer by combining the reducers
const rootReducer = combineReducers({
  profile: profileReducer,
});

// Creating the store with the root reducer
const store = createStore(rootReducer);

export default store;
