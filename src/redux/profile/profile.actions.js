import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
  "profile/fetchUserData",
  async () => {
    try {
      const response = await axios.get(`https://api.github.com/user`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
