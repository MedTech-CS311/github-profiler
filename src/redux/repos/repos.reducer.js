const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  repos: [],
};

const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducer: {},
});

export default reposSlice.reducer;
