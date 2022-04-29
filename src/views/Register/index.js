import React from "react";
import Div from "../../components/atoms/Div";
import RegisterForm from "../../components/molecules/RegisterForm";
import { LogoBox, StyledText } from "./StyledRegister";
import Logo from "../../components/atoms/Logo";

const Register = () => {
  return (
    <Div background="true">
      <LogoBox>
        <Logo size="l" />
        <StyledText>StarPanel</StyledText>
      </LogoBox>
      <Div form="true">
        <RegisterForm />
      </Div>
    </Div>
  );
};

export default Register;
