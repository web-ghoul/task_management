import { PrimaryBox } from "../../mui/PrimaryBox";
import { PrimaryContainer } from "../../mui/PrimaryContainer";
import loginImg from "../../assets/images/Allura - Giant Phone.png";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography
} from "@mui/material";
import { PrimaryTextField } from "../../mui/PrimaryTextField";
import { FormikProps } from "formik";
import { RegisterTypes } from "../../types/form.types";
import { PrimaryButton } from "../../mui/PrimaryButton";
import LoadButton from "../LoadButton/LoadButton";

type Props = {
  formik: FormikProps<RegisterTypes>;
  loading: boolean;
};

const RegisterForm = ({ loading, formik }: Props) => {
  return (
    <PrimaryBox>
      <PrimaryContainer>
        <Box
          className={`back_img`}
          sx={{ backgroundImage: `url(${loginImg})` }}
        />
        <Box className={`grid jcs aic g30`}>
          <Typography variant="h4" className={`tac flex jcc aic`}>
            Register
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
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Gender
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="gender"
              id="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <PrimaryTextField
            fullWidth
            id="password"
            name="password"
            type="Password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <PrimaryTextField
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <LoadButton loading={loading}>
            <PrimaryButton type={"submit"}>Register</PrimaryButton>
          </LoadButton>
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default RegisterForm;
