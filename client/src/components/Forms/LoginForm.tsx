import { PrimaryBox } from "../../mui/PrimaryBox";
import { PrimaryContainer } from "../../mui/PrimaryContainer";
import loginImg from "../../assets/images/Allura - Giant Phone.png";
import { Box, Typography } from "@mui/material";
import { PrimaryTextField } from "../../mui/PrimaryTextField";
import { FormikProps } from "formik";
import { LoginTypes } from "../../types/form.types";
import { PrimaryButton } from "../../mui/PrimaryButton";
import LoadButton from "../LoadButton/LoadButton";

type Props = {
  formik: FormikProps<LoginTypes>;
  loading: boolean;
};

const LoginForm = ({ loading, formik }: Props) => {
  return (
    <PrimaryBox>
      <PrimaryContainer>
        <Box
          className={`back_img`}
          sx={{ backgroundImage: `url(${loginImg})` }}
        />
        <Box className={`grid jcs aic g30`}>
          <Typography variant="h4" className={`tac flex jcc aic`}>
            Login
          </Typography>
          <PrimaryTextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <PrimaryTextField
            fullWidth
            id="password"
            name="password"
            type="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <LoadButton loading={loading}>
            <PrimaryButton type={"submit"}>Login</PrimaryButton>
          </LoadButton>
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default LoginForm;
