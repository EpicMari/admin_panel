import React from "react";
import TextField from "@mui/material/TextField";
import Button from "../../atoms/Button";
import Paragraph from "../../atoms/Paragraph";
import Link from "../../atoms/Link";
import { routes } from "../../../routes";
import { Form, Formik } from "formik";
import { registerFormSchema } from "../../../utils/validationSchema";
import { auth } from "../../../firebase/firebaseConfig";
import { usersCollection } from "../../../firebase/firestoreUtils";

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
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          const { email, password, firstName, lastName } = values;

          auth
            .createUserWithEmailAndPassword(email, password)
            .then((item) => {
              console.log(item);

              usersCollection
                .doc(item.user.uid)
                .set({
                  firstName,
                  lastName,
                  email,
                  password,
                })
                .then((r) => console.log(r))
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
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
