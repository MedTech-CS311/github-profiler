import { createSlice } from "@reduxjs/toolkit";
import fetchUserProfile from "../actions/profile.actions";

const initialState = {
    profile : {},
    loading: false
};
const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserProfile.fulfilled,(state,action) => {
            state.profile = action.payload;
        });
        builder.addCase(fetchUserProfile.rejected,(state, action) => {
            state.loading = false
        });

        builder.addCase(fetchUserProfile.pending, (state, action) => {
            state.loading=true
        });
    },
});

export default profileSlice.reducer;