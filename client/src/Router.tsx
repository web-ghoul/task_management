import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Error from "./pages/Error";
import AddTaskModel from "./models/AddTaskModal";
import UpdateTaskModal from "./models/UpdateTaskModal";
import DeleteTaskModal from "./models/DeleteTaskModal";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <AddTaskModel />
      <UpdateTaskModal />
      <DeleteTaskModal />
    </BrowserRouter>
  );
};

export default Router;
