import { combineReducers } from "@reduxjs/toolkit"
import Profile from './Profile.reducer'


const rootReducer = combineReducers(
{
  profile : Profile
})

export default rootReducer;