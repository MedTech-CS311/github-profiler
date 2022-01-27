import { createSlice } from "@reduxjs/toolkit";
import fetchRepos  from "../actions/repos.actions";

const initialState = {
    reposList: [],
    filters:{page:1,per_page:10,visibility:"public"}
};

const reposSlice = createSlice({
    name: "repos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRepos.fulfilled,(state,action) => {
            state.reposList = action.payload;
        });
        builder.addCase(fetchRepos.rejected,(state, action) => {
            
        });

        builder.addCase(fetchRepos.pending, (state, action) => {
           
        });
    }

});

export default reposSlice.reducer;