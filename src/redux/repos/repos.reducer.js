import { fetchUserRepos } from "./repos.actions";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  reposList: [],
  loading: "idle",
};

const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserRepos.fulfilled, (state, action) => {
      state.reposList = action.payload;
      state.loading = "idle";
    });
    builder.addCase(fetchUserRepos.rejected, (state, action) => {
      state.loading = "idle";
    });
    builder.addCase(fetchUserRepos.pending, (state, action) => {
      state.loading = "loading";
    });
  },
});

export default reposSlice.reducer;
