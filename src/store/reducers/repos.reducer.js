import { createSlice } from "@reduxjs/toolkit";
import { fetchRepos } from "../actions/repos.actions";


const initialState = {
    reposData : []
}

const reposSlice = createSlice({
    name: "repos",
    initialState,
    reducers : {}
    ,
    extraReducers: (builder) => {
        builder.addCase(fetchRepos.fulfilled, (state,action) => {
            state.reposData = action.payload;
        })
    }
});

export default reposSlice.reducer