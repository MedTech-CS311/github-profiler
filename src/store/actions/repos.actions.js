import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const fetchRepos = createAsyncThunk(
    'repos/fetchRepos',
    async () => {
        const res = await axios.get('https://api.github.com/user/repos')
        return res.data
    }
)

export { fetchRepos } 