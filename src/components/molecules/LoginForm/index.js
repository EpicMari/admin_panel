import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { routes } from '../../../routes';
import { Formik, Form, ErrorMessage } from 'formik';
import { loginFormSchema } from '../../../utils/validationSchema';
import { AuthContext } from '../../../context';
import { Button } from '@mui/material';
import Paragraph from '../../atoms/Paragraph';
import { useHistory } from 'react-router-dom';
import { StyledSignUpBox } from './StyledLoginForm';
import CustomErrorMessage from '../../atoms/CustomErrorMessage';

const LoginForm = () => {
  const { signIn } = useContext(AuthContext);
  const history = useHistory();
  return (
    <>
      <Formik
        initialValues={{
          email: 'test50@test.com',
          password: '123456',
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
            <ErrorMessage name="email" component={CustomErrorMessage} />
            <TextField
              variant="standard"
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <ErrorMessage name="password" component={CustomErrorMessage} />
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <StyledSignUpBox>
        <Paragraph size="l" color="grey">
          Don&apos;t have account?
        </Paragraph>
        <Button color="primary" variant="outlined" onClick={() => history.push(routes.register)}>
          Sign Up
        </Button>
      </StyledSignUpBox>
    </>
  );
};

export default LoginForm;
