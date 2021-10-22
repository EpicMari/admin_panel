import React from "react";
import TextField from "@mui/material/TextField";
import Button from "../../atoms/Button";
import Paragraph from "../../atoms/Paragraph";
import Link from "../../atoms/Link";
import { routes } from "../../../routes";
import { Formik, Form } from "formik";
import { loginFormSchema } from "../../../utils/validationSchema";

const LoginForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginFormSchema}
        onSubmit={({ resetForm }) => {
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
            <Button type="submit">Login</Button>
          </Form>
        )}
      </Formik>
      <Paragraph>Don't have account?</Paragraph>
      <Link to={routes.register}>Sign Up</Link>
    </>
  );
};

export default LoginForm;
