import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile/profile.reducer";

// Creating the root reducer by combining the reducers
const rootReducer = combineReducers({
  profile: profileReducer,
});

// Creating the store with the root reducer
const store = configureStore({ reducer: rootReducer });

export default store;
