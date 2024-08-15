import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogin, useLogout } from "../services/authService";
import { Form, Formik } from "formik";
import { loginValidationSchema } from "../utils/validationSchemas";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";

const LoginForm = () => {
   const login = useLogin();
   const logout = useLogout();
   const navigate = useNavigate();
   const location = useLocation();
   const username = location.state?.username || "";
   const [errorMessage, setErrorMessage] = useState("");

   const initialValues = {
      username: username,
      password: "",
   };

   const handleSubmit = async (values) => {
      setErrorMessage("");
      const response = await login.mutateAsync(values);
      if (response?.status && response.status === "success") {
         const role = response.user?.role;
         if (role === "admin") {
            navigate("/dashboard");
         } else if (role === "company") {
            navigate("/company-profile");
         } else if (role === "job_seeker") {
            navigate("/joblist");
         } else {
            logout();
         }
      } else {
         setErrorMessage(response.data.detail);
      }
   };

   useEffect(() => {
      if (username) {
         document.getElementsByName("password")[0].focus();
      } else {
         document.getElementsByName("username")[0].focus();
      }
   }, [username]);
   return (
      <div className="bg-gray-100 min-h-screen">
         <div className="pt-16">
            <Formik
               initialValues={initialValues}
               validationSchema={loginValidationSchema}
               onSubmit={handleSubmit}
            >
               {({ isSubmitting, touched, errors }) => (
                  <Form className="max-w-sm mx-auto p-16 pt-6 bg-white rounded shadow-md mt-10">
                     <h1 className="text-center text-2xl my-4 font-bold">
                        SignIn
                     </h1>
                     <hr />
                     <InputField
                        name="username"
                        label="Username"
                        touched={touched}
                        errors={errors}
                     />
                     <InputField
                        type="password"
                        name="password"
                        label="Password"
                        touched={touched}
                        errors={errors}
                     />

                     {errorMessage && (
                        <div className="text-red-500 text-center my-2">
                           {errorMessage}
                        </div>
                     )}

                     <div className="flex items-center justify-between">
                        <SubmitButton
                           isSubmitting={isSubmitting}
                           text="Login"
                        />
                     </div>
                  </Form>
               )}
            </Formik>
         </div>
      </div>
   );
};

export default LoginForm;
