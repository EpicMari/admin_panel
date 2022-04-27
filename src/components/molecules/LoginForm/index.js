import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Paragraph from "../../atoms/Paragraph";
import { routes } from "../../../routes";
import { Formik, Form } from "formik";
import { loginFormSchema } from "../../../utils/validationSchema";
import AuthContext from "../../../context";
import { Button } from "@mui/material";
import { StyledLink } from "./StyledLoginForm";

const LoginForm = () => {
  const { signIn } = useContext(AuthContext);
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginFormSchema}
        onSubmit={(values, { resetForm }) => {
          const { email, password } = values;
          signIn(email, password);
          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <TextField
              variant="standard"
              label="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <TextField
              variant="standard"
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <Paragraph size="l">Don't have account?</Paragraph>
      <StyledLink to={routes.register}>Sign Up</StyledLink>
    </>
  );
};

export default LoginForm;
