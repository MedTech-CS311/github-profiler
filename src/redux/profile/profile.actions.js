import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
  "profile/fetchUserData",
  async () => {
    const response = await axios.get(`https://api.github.com/user`);
    return response.data;
  }
);
