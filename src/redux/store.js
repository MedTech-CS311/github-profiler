import rootReducer from "./reducers"
//import { createStore } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
    reducer: rootReducer
})
export default store;