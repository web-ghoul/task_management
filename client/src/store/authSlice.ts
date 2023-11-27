import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthInitialState } from "../types/store.types";

const initialState: AuthInitialState = {
  token: "",
  userId: ""
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
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
