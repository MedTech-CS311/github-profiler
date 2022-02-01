import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const  baseURL = process.env.REACT_APP_GIT_API

const fetchRepos = createAsyncThunk(
    'repos/fetchRepos',
    async () => {
        const res = await axios.get(baseURL+'/user/repos')
        return res.data
    }
)

export { fetchRepos } 