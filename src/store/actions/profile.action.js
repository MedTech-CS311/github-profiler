import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'



const baseURL = process.env.REACT_APP_GIT_API


const fetchProfileData = createAsyncThunk(
    'profile/fetchProfileData',
    async () => {
        const res = await axios.get(baseURL+'/user')
        return res.data
    }
)

export { fetchProfileData } 