import React from "react";
import Div from "../../components/atoms/Div";
import Logo from "../../components/atoms/Logo";
import LoginForm from "../../components/molecules/LoginForm";
import { LogoBox, StyledText } from "./StyledLogin";

const Login = () => {
  return (
    <Div background="true">
      <LogoBox>
        <Logo size="l" />
        <StyledText>StarPanel</StyledText>
      </LogoBox>
      <Div form="true">
        <LoginForm />
      </Div>
    </Div>
  );
};

export default Login;
