import React from 'react';
import Div from '../../components/atoms/Div';
import Logo from '../../components/atoms/Logo';
import LoginForm from '../../components/molecules/LoginForm';

const Login = () => {
  return (
    <Div background="true">
      <Logo size="l" />
      <Div form="true">
        <LoginForm />
      </Div>
    </Div>
  );
};

export default Login;
