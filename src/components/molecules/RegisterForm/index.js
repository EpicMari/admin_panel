import React from "react";
import TextField from "@mui/material/TextField";
import Button from "../../atoms/Button";
import Paragraph from "../../atoms/Paragraph";
import Link from "../../atoms/Link";
import { routes } from "../../../routes";
import { Form, Formik } from "formik";
import { registerFormSchema } from "../../../utils/validationSchema";

const RegisterForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerFormSchema}
        onSubmit={({ resetForm }) => {
          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <TextField
              variant="standard"
              label="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            <TextField
              variant="standard"
              label="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            <TextField
              variant="standard"
              label="Email Address"
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
            <TextField
              variant="standard"
              label="Confirm Passowrd"
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            <Button type="submit">SIGN UP</Button>
          </Form>
        )}
      </Formik>
      <Paragraph>Already have account?</Paragraph>
      <Link to={routes.login}>Log In</Link>
    </>
  );
};

export default RegisterForm;
