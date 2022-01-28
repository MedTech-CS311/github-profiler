import { combineReducers } from "@reduxjs/toolkit"
import Navbar from './Navbar.reducer'
import Profile from './Profile.reducer'


const rootReducer = combineReducers(
{
  nav :Navbar,
  profile :Profile
})

export default rootReducer;