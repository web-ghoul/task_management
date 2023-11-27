import { InputAdornment } from "@mui/material";
import { PrimaryTextField } from "../../mui/PrimaryTextField";
import { CategoryRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { FormikProps } from "formik";

type Props = {
  formik: FormikProps<{ category: string }>;
};

const FilterByCategoryForm = ({formik}: Props) => {
  const { isLoading, categories } = useSelector(
    (state: RootState) => state.categories
  );
  return (
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
      error={formik.touched.category && Boolean(formik.errors.category)}
      helperText={formik.touched.category && formik.errors.category}
    >
      <option key={-1} value={""}>
        Filter By Category
      </option>
      {!isLoading &&
        categories &&
        categories.map((category, i) =>
          <option key={i} value={category.id}>
            {category.title}
          </option>
        )}
    </PrimaryTextField>
  );
};

export default FilterByCategoryForm;
