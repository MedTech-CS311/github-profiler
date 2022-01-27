import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const fetchUserProfile = createAsyncThunk("profile/fetchProfile", 
     async() => {
        try {
            const response = await axios.get(`https://api.github.com/user`);
            return response.data;
        } catch (error) {
            return error;
        }   
     });

export default fetchUserProfile;