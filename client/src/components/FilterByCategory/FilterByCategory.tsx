import { InputAdornment } from "@mui/material";
import { PrimaryTextField } from "../../mui/PrimaryTextField";
import { CategoryRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getTasks } from "../../store/tasksSlice";
import { FilterTasksTypes } from "../../types/app.types";

type Props = {};

const FilterByCategory = (props: Props) => {
  const { isLoading, categories } = useSelector(
    (state: RootState) => state.categories
  );
  const { token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  //Filter Tasks
  const handleFilterTasksByCategory = (e: FilterTasksTypes) => {
    dispatch(getTasks({ token, category: e.target.value }));
  };
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
      onChange={(e: FilterTasksTypes) => handleFilterTasksByCategory(e)}
    >
      <option key={-1} value={""}>
        Filter By Category
      </option>
      {!isLoading &&
        categories &&
        categories.map((category, i) =>
          <option key={i} value={category.title}>
            {category.title}
          </option>
        )}
    </PrimaryTextField>
  );
};

export default FilterByCategory;
