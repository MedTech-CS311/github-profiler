import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserRepos = createAsyncThunk(
  "repos/fetchUserRepos",
  async (filters) => {
    try {
      const response = await axios.get(`https://api.github.com/user/repos`, {
        params: filters,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
