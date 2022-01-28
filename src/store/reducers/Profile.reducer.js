import { createSlice } from "@reduxjs/toolkit";
import { fetchProfileData } from "../actions/profile.action";

const initialState = {
    userData : {}
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers : {}
    ,
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.fulfilled, (state,action) => {
            state.userData = action.payload;
        })
    }
});

export default profileSlice.reducer

