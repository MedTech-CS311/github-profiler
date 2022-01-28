import { combineReducers } from "@reduxjs/toolkit"
import Profile from './Profile.reducer'
import reposReducer from "./repos.reducer";


const rootReducer = combineReducers(
{
  profile : Profile,
  repos : reposReducer
})

export default rootReducer;