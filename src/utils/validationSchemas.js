import * as Yup from "yup";

const registerValidationSchema = Yup.object().shape({
   firstName: Yup.string().required("First name is required"),
   lastName: Yup.string().required("Last name is required"),
   username: Yup.string().required("Username is required"),
   email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
   role: Yup.string().required("Role is required"),
   password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
});

const loginValidationSchema = Yup.object().shape({
   username: Yup.string().required("Username is required"),
   password: Yup.string()
      .min(3, "Password must be at least 3 characters")
      .required("Password is required"),
});

export { registerValidationSchema, loginValidationSchema };
