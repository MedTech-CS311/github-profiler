import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const fetchRepos = createAsyncThunk(
    "repos/fetchRepos",
    async () => {
        try {
            const response = await axios.get("https://api.github.com/user/repos");
            return response.data;
        } catch (error) {
            return error;
        }
     
    });

export default fetchRepos;