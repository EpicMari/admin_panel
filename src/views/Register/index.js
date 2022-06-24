import React from 'react';
import Div from '../../components/atoms/Div';
import RegisterForm from '../../components/molecules/RegisterForm';
import Logo from '../../components/atoms/Logo';

const Register = () => {
  return (
    <Div background="true">
      <Logo size="l" />
      <Div form="true">
        <RegisterForm />
      </Div>
    </Div>
  );
};

export default Register;
