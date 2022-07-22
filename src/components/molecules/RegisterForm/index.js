import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Paragraph from '../../atoms/Paragraph';
import { routes } from '../../../routes';
import { Form, Formik, ErrorMessage } from 'formik';
import { registerFormSchema } from '../../../utils/validationSchema';
import { AuthContext } from '../../../context';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { StyledLogInBox } from './StyledRegisterForm';
import CustomErrorMessage from '../../atoms/CustomErrorMessage';

const RegisterForm = () => {
  const { createAcc } = useContext(AuthContext);
  const history = useHistory();
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={registerFormSchema}
        onSubmit={(values, { resetForm }) => {
          const { email, password, firstName, lastName } = values;
          createAcc(email, password, firstName, lastName);
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
            <ErrorMessage name="firstName" component={CustomErrorMessage} />
            <TextField
              variant="standard"
              label="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            <ErrorMessage name="lastName" component={CustomErrorMessage} />
            <TextField
              variant="standard"
              label="Email Address"
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
            <TextField
              variant="standard"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            <ErrorMessage name="confirmPassword" component={CustomErrorMessage} />
            <Button variant="contained" type="submit">
              SIGN UP
            </Button>
          </Form>
        )}
      </Formik>
      <StyledLogInBox>
        <Paragraph size="l" color="grey">
          Already have account?
        </Paragraph>
        <Button color="primary" variant="outlined" onClick={() => history.push(routes.login)}>
          Log In
        </Button>
      </StyledLogInBox>
    </>
  );
};

export default RegisterForm;
