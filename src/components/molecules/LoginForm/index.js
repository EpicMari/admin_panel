import React from "react";
import TextField from "@mui/material/TextField";
import Button from "../../atoms/Button";
import Paragraph from "../../atoms/Paragraph";
import Link from "../../atoms/Link";
import { routes } from "../../../routes";

const LoginForm = () => {
  return (
    <>
      <TextField variant="standard" label="Email" />
      <TextField variant="standard" label="Password" type="password" />
      <Button>Login</Button>
      <Paragraph>Don't have account?</Paragraph>
      <Link to={routes.register}>Sign Up</Link>
    </>
  );
};

export default LoginForm;
