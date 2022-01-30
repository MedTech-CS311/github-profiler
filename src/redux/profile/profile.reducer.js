import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export default profileSlice.reducer;
