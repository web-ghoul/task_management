// store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import tasksReducer from "./tasksSlice";
import categoriesReducer from "./categoriesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
    categories: categoriesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
