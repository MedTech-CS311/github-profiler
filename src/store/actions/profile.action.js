import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const fetchProfileData = createAsyncThunk(
    'profile/fetchProfileData',
    async () => {
        const res = await axios.get('https://api.github.com/user')
        return res.data
    }
)

export { fetchProfileData } 