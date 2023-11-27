import loginImg from "../../assets/images/Allura - Giant Phone.png";
import { Box, InputAdornment, Typography } from "@mui/material";
import { PrimaryTextField } from "../../mui/PrimaryTextField";
import { FormikProps } from "formik";
import { PrimaryButton } from "../../mui/PrimaryButton";
import LoadButton from "../LoadButton/LoadButton";
import { CategoryRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { TaskFormTypes } from "../../types/form.types";

type Props = {
  formik: FormikProps<TaskFormTypes>;
  loading: boolean;
};

const AddTaskForm = ({ loading, formik }: Props) => {
  const { categories, isLoading } = useSelector(
    (state: RootState) => state.categories
  );
  return (
    <>
        <Box
          className={`back_img`}
          sx={{ backgroundImage: `url(${loginImg})` }}
        />
        <Box className={`grid jcs aic g30`}>
          <Typography variant="h4" className={`tac flex jcc aic`}>
            Add New Task
          </Typography>
          <PrimaryTextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <PrimaryTextField
            fullWidth
            id="description"
            name="description"
            type="text"
            label="Description"
            multiline
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
          <PrimaryTextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CategoryRounded
                    sx={{ color: theme => theme.palette.primary.main }}
                  />
                </InputAdornment>
              )
            }}
            id="category"
            name="category"
            select
            fullWidth
            SelectProps={{
              native: true
            }}
            variant="standard"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.category && Boolean(formik.errors.category)
            }
            helperText={formik.touched.category && formik.errors.category}
          >
            <option key={-1} value={""}>
              Choose Category
            </option>
            {!isLoading &&
              categories &&
              categories.map((category, i) =>
                <option key={i} value={category.id}>
                  {category.title}
                </option>
              )}
          </PrimaryTextField>
          <LoadButton loading={loading}>
            <PrimaryButton type={"submit"}>Add</PrimaryButton>
          </LoadButton>
        </Box></>
  );
};

export default AddTaskForm;
