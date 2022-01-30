import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "./profile.actions";

const initialState = {
  userData: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handling the success case of the action
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});

export default profileSlice.reducer;
