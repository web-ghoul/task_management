import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TasksInitialState } from "../types/store.types";
import { TaskTypes } from "../types/app.types";
import axios from "axios";

export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async (userId: string | undefined): Promise<TaskTypes[] | undefined> => {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/tasks/${userId}`
    );
    return res.data;
  }
);

const initialState: TasksInitialState = {
  tasks: undefined,
  isLoading: false
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.isLoading = false;
    });
  }
});

export default tasksSlice.reducer;
