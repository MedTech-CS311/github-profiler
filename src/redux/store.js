import { combineReducers, createStore } from "@reduxjs/toolkit";

// Creating the root reducer by combining the reducers
const rootReducer = combineReducers({});

// Creating the store with the root reducer
const store = createStore(rootReducer);

export default store;
