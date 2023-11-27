import { Box } from "@mui/material";
import Router from "./Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import { useCookies } from "react-cookie";
import { getCategories } from "./store/categoriesSlice";
import { AppDispatch } from "./store/store";
import TaskProvider from "./context/TaskContext";
import { getTasks } from "./store/tasksSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [cookies] = useCookies();
  useEffect(
    () => {
      try {
        const token: string = cookies.tmToken;
        const userId: string = cookies.tmUserId;
        if (token && userId) {
          dispatch(login({ token, userId }));
          dispatch(getCategories());
          dispatch(getTasks(userId));
        } else {
          dispatch(logout());
        }
      } catch (err) {
        console.log(err);
      }
    },
    [dispatch, cookies]
  );
  return (
    <Box component={"main"}>
      <TaskProvider>
        <Header />
        <Router />
        <Toaster />
        <Footer />
      </TaskProvider>
    </Box>
  );
}

export default App;
