// counterSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CategoriesInitialState } from "../types/store.types";
import axios from "axios";
import { CategoryTypes } from "../types/app.types";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (): Promise<CategoryTypes[] | undefined> => {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/categories`
    );
    return res.data;
  }
);

const initialState: CategoriesInitialState = {
  categories: undefined,
  isLoading: true
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    });
  }
});

export default categoriesSlice.reducer;
