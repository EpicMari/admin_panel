import React from "react";
import TextField from "@mui/material/TextField";
import Button from "../../atoms/Button";
import Paragraph from "../../atoms/Paragraph";
import Link from "../../atoms/Link";
import { routes } from "../../../routes";

const RegisterForm = () => {
  return (
    <>
      <h1>hello</h1>
      <TextField variant="standart" label="First Name" />
      <TextField variant="standart" label="Last Name" />
      <TextField variant="standart" label="Email Address" />
      <TextField variant="standart" label="Password" type="password" />
      <TextField variant="standart" label="Confirm Passowrd" type="password" />
      <Button>SIGN UP</Button>
      <Paragraph>Already have account?</Paragraph>
      <Link to={routes.login}>Log In</Link>
    </>
  );
};

export default RegisterForm;
