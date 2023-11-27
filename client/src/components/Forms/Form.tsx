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
import { login } from "../../store/authSlice";
import { RootState } from "../../store/store";
import useTaskContext from "../../hooks/useTaskContext";
import AddTaskForm from "./AddTaskForm";
import { useCookies } from "react-cookie";
import UpdateTaskForm from "./UpdateTaskForm";
import DeleteTaskForm from "./DeleteTaskForm";

type Props = {
  type: string;
};

const Form = ({ type }: Props) => {
  const [loading, setLoading] = useState(false);
  const { userId } = useSelector((state: RootState) => state.auth);
  const { handleCloseAddTaskModal, updatableTaskData } = useTaskContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [setCookie, cookies] = useCookies();

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
    onSubmit: (values: LoginTypes) => {
      setLoading(true);
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/authentication/login`,
          values
        )
        .then(res => {
          let token: string = res.data.token;
          let userId: string = res.data.userId;
          cookies("tmToken", token, {
            path: "/",
            expires: new Date(Date.now() + 3600000)
          });
          cookies("tmUserId", userId, {
            path: "/",
            expires: new Date(Date.now() + 3600000)
          });
          dispatch(login({ token, userId }));
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
    onSubmit: (values: RegisterTypes) => {
      setLoading(true);
      axios
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
    completed: false
  };

  const addTaskValidationSchema = yup.object({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    category: yup.string().required("category is required")
  });

  const addTaskFormik = useFormik({
    initialValues: addTaskInitialValues,
    validationSchema: addTaskValidationSchema,
    onSubmit: (values: TaskFormTypes) => {
      setLoading(true);
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/addTask`, values)
        .then(() => {
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
    title: updatableTaskData && updatableTaskData.title,
    description: updatableTaskData && updatableTaskData.description,
    category: updatableTaskData && updatableTaskData.category,
    userId,
    completed: updatableTaskData && updatableTaskData.completed
  };

  const updateTaskValidationSchema = yup.object({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    category: yup.string().required("category is required")
  });

  const updateTaskFormik = useFormik({
    initialValues: updateTaskInitialValues,
    validationSchema: updateTaskValidationSchema,
    onSubmit: (values: TaskFormTypes) => {
      setLoading(true);
      axios
        .patch(`${process.env.REACT_APP_SERVER_URL}/updateTask`, values)
        .then(() => {
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

  return (
    <form
      onSubmit={
        type === "login"
          ? loginFormik.handleSubmit
          : type === "register"
            ? registerFormik.handleSubmit
            : type === "add_task"
              ? addTaskFormik.handleSubmit
              : () => console.log(1)
      }
      className=""
    >
      {type === "login"
        ? <LoginForm loading={loading} formik={loginFormik} />
        : type === "register"
          ? <RegisterForm loading={loading} formik={registerFormik} />
          : type === "add_task"
            ? <AddTaskForm loading={loading} formik={addTaskFormik} />
            : type === "update_task"
              ? <UpdateTaskForm loading={loading} formik={updateTaskFormik} />
              : type === "delete_task" && <DeleteTaskForm loading={loading} />}
    </form>
  );
};

export default Form;
