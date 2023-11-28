import { useFormik } from "formik";
import "./Form.scss";
import * as yup from "yup";
import LoginForm from "./LoginForm";
import {
  LoginTypes,
  RegisterTypes,
  TaskFormTypes
} from "../../types/form.types";
import RegisterForm from "./RegisterForm";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUser, login } from "../../store/authSlice";
import { AppDispatch, RootState } from "../../store/store";
import useTaskContext from "../../hooks/useTaskContext";
import AddTaskForm from "./AddTaskForm";
import { useCookies } from "react-cookie";
import UpdateTaskForm from "./UpdateTaskForm";
import DeleteTaskForm from "./DeleteTaskForm";
import { getTasks } from "../../store/tasksSlice";
import CompletedTaskForm from "./CompletedTaskForm";

type Props = {
  type: string;
  completed?: boolean | undefined;
  id?: number | undefined;
};

const Form = ({ type, id, completed }: Props) => {
  const [loading, setLoading] = useState(false);
  const { token, userId } = useSelector((state: RootState) => state.auth);
  const {
    handleCloseAddTaskModal,
    taskId,
    updatableTaskData,
    handleCloseUpdateTaskModal,
    handleCloseDeleteTaskModal
  } = useTaskContext();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [cookies, setCookie] = useCookies();
  const date = new Date();
  const previousDate = new Date(date.getTime());
  previousDate.setDate(date.getDate() - 1);

  //Login
  const loginInitialValues: LoginTypes = {
    username: "",
    password: ""
  };

  const loginValidationSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required")
  });

  const loginFormik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async (values: LoginTypes) => {
      setLoading(true);
      await axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/authentication/login`,
          values
        )
        .then(res => {
          let token: string = res.data.token;
          let userId: string = res.data.userId;
          setCookie("tmToken", token, {
            path: "/",
            expires: new Date(Date.now() + 36000000)
          });
          setCookie("tmUserId", userId, {
            path: "/",
            expires: new Date(Date.now() + 36000000)
          });
          dispatch(login({ token, userId }));
          dispatch(getUser({ token }));
          navigate(`${process.env.REACT_APP_DASHBOARD_PAGE}`);
          toast.success("Login Successfully");
        })
        .catch(err => {
          try {
            if (typeof err.response.data.message === "object") {
              toast.error(err.response.data.message.join("\n"));
            } else {
              toast.error(err.response.data.message);
            }
          } catch (error) {
            toast.error("error");
          }
        });
      setLoading(false);
    }
  });

  //Register
  const registerInitialValues = {
    username: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: ""
  };

  const registerValidationSchema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().email().required("Email is required"),
    gender: yup.string().required("Gender is required"),
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Passwords must match")
  });

  const registerFormik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerValidationSchema,
    onSubmit: async (values: RegisterTypes) => {
      setLoading(true);
      await axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/authentication/register`,
          values
        )
        .then(res => {
          navigate(`${process.env.REACT_APP_LOGIN_PAGE}`);
          toast.success("Account is Created Successfully");
        })
        .catch(err => {
          try {
            if (typeof err.response.data.message === "object") {
              toast.error(err.response.data.message.join("\n"));
            } else {
              toast.error(err.response.data.message);
            }
          } catch (error) {
            toast.error("error");
          }
        });
      setLoading(false);
    }
  });

  //Add Task
  const addTaskInitialValues = {
    title: "",
    description: "",
    category: "",
    userId,
    completed: false,
    dueDate: ""
  };

  const addTaskValidationSchema = yup.object({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    category: yup.string().required("category is required"),
    dueDate: yup
      .date()
      .min(previousDate, "Enter Valid Date")
      .required("Enter Task Due Date")
  });

  const addTaskFormik = useFormik({
    initialValues: addTaskInitialValues,
    validationSchema: addTaskValidationSchema,
    onSubmit: async (values: TaskFormTypes) => {
      setLoading(true);
      await axios
        .post(`${process.env.REACT_APP_SERVER_URL}/tasks/addTask`, values, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(() => {
          handleCloseAddTaskModal();
          dispatch(getTasks({ token }));
          toast.success("Task is Created Successfully");
        })
        .catch(err => {
          try {
            if (typeof err.response.data.message === "object") {
              toast.error(err.response.data.message.join("\n"));
            } else {
              toast.error(err.response.data.message);
            }
          } catch (error) {
            toast.error("error");
          }
        });
      setLoading(false);
    }
  });

  //Update Task
  const updateTaskInitialValues = {
    title: updatableTaskData ? updatableTaskData.title : "",
    description: updatableTaskData ? updatableTaskData.description : "",
    category: updatableTaskData ? updatableTaskData.category : "",
    userId,
    completed: updatableTaskData ? updatableTaskData.completed : false,
    dueDate: updatableTaskData ? updatableTaskData.dueDate : ""
  };

  const updateTaskValidationSchema = yup.object({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    category: yup.string().required("category is required")
  });

  const updateTaskFormik = useFormik({
    initialValues: updateTaskInitialValues,
    validationSchema: updateTaskValidationSchema,
    onSubmit: async (values: TaskFormTypes) => {
      setLoading(true);
      await axios
        .put(
          `${process.env.REACT_APP_SERVER_URL}/tasks/updateTask/${taskId}`,
          values,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        .then(() => {
          dispatch(getTasks({ token }));
          handleCloseUpdateTaskModal();
          toast.success("Task is Updated Successfully");
        })
        .catch(err => {
          try {
            if (typeof err.response.data.message === "object") {
              toast.error(err.response.data.message.join("\n"));
            } else {
              toast.error(err.response.data.message);
            }
          } catch (error) {
            toast.error("error");
          }
        });
      setLoading(false);
    }
  });

  //Delete Task
  const handleDeleteTask = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .delete(
        `${process.env.REACT_APP_SERVER_URL}/tasks/deleteTask/${taskId}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(() => {
        dispatch(getTasks({ token }));
        handleCloseDeleteTaskModal();
        toast.success("Task is Deleted Successfully");
      })
      .catch(err => {
        try {
          if (typeof err.response.data.message === "object") {
            toast.error(err.response.data.message.join("\n"));
          } else {
            toast.error(err.response.data.message);
          }
        } catch (error) {
          toast.error("error");
        }
      });
    setLoading(false);
  };

  //Completed Task
  const handleCompletedTask = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/tasks/completedTask/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(() => {
        dispatch(getTasks({ token }));
        toast.success("Task is Completed Successfully");
      })
      .catch(err => {
        try {
          if (typeof err.response.data.message === "object") {
            toast.error(err.response.data.message.join("\n"));
          } else {
            toast.error(err.response.data.message);
          }
        } catch (error) {
          toast.error("error");
        }
      });
    setLoading(false);
  };

  //Not Completed Task
  const handleNotCompletedTask = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/tasks/notCompletedTask/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(() => {
        dispatch(getTasks({ token }));
        toast.success("Task is Not Completed Yet");
      })
      .catch(err => {
        try {
          if (typeof err.response.data.message === "object") {
            toast.error(err.response.data.message.join("\n"));
          } else {
            toast.error(err.response.data.message);
          }
        } catch (error) {
          toast.error("error");
        }
      });
    setLoading(false);
  };

  return (
    <form
      onSubmit={
        type === "login"
          ? loginFormik.handleSubmit
          : type === "register"
            ? registerFormik.handleSubmit
            : type === "add_task"
              ? addTaskFormik.handleSubmit
              : type === "update_task"
                ? updateTaskFormik.handleSubmit
                : type === "delete_task"
                  ? handleDeleteTask
                  : type === "completed_task"
                    ? handleCompletedTask
                    : handleNotCompletedTask
      }
      className={`${type === "delete_task" && "delete_Task"} grid jcs aic g30`}
    >
      {type === "login"
        ? <LoginForm loading={loading} formik={loginFormik} />
        : type === "register"
          ? <RegisterForm loading={loading} formik={registerFormik} />
          : type === "add_task"
            ? <AddTaskForm loading={loading} formik={addTaskFormik} />
            : type === "update_task"
              ? <UpdateTaskForm loading={loading} formik={updateTaskFormik} />
              : type === "delete_task"
                ? <DeleteTaskForm loading={loading} />
                : type === "completed_task"
                  ? <CompletedTaskForm
                      loading={loading}
                      completed={completed}
                    />
                  : type === "not_completed_task" &&
                    <CompletedTaskForm
                      loading={loading}
                      completed={completed}
                    />}
    </form>
  );
};

export default Form;
