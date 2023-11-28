import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthInitialState } from "../types/store.types";
import { UserTypes } from "../types/app.types";
import axios from "axios";

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (args: { token: string }): Promise<UserTypes | undefined> => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user`, {
      headers: { Authorization: `Bearer ${args.token}` }
    });
    return res.data;
  }
);

const initialState: AuthInitialState = {
  token: "",
  userId: "",
  user: undefined
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthInitialState>) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    logout: state => {
      state.token = "";
      state.userId = "";
    }
  },
  extraReducers: builder => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
