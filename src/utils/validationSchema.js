import * as Yup from "yup";

export const loginFormSchema = Yup.object().shape({
  email: Yup.string().required("Enter your email").email("Invalid email"),
  password: Yup.string().required("Enter your password"),
});

export const registerFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Enter first name")
    .min(2, "First name too short"),
  lastName: Yup.string()
    .required("Enter last name")
    .min(2, "Second name too short"),
  email: Yup.string().required("Enter your email").email("Invalid email"),
  password: Yup.string()
    .required("Enter your password")
    .min(3, "Password too short"),
  confirmPassword: Yup.string().when("password", {
    is: (val) => (val && val.lenght > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
});
