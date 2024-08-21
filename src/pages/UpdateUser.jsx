import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { registerValidationSchema } from "../utils/validationSchemas";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import { useAuth } from "../context/AuthContext";

const UpdateUser = () => {
   const { user } = useAuth();
   const [initialValues, setInitialValues] = useState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
   });

   useEffect(() => {
      if (user) {
         setInitialValues({
            firstName: user.first_name || "",
            lastName: user.last_name || "",
            username: user.username || "",
            email: user.email || "",
         });
      }
   }, [user]);

   const handleSubmit = (values) => {};

   return (
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-4">
         <h2 className="text-2xl font-bold mb-4">Update Admin Details</h2>
         <Formik
            initialValues={initialValues}
            validationSchema={registerValidationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
         >
            {({ touched, errors, isSubmitting }) => (
               <Form>
                  <InputField
                     name="firstName"
                     label="First Name"
                     touched={touched}
                     errors={errors}
                  />
                  <InputField
                     name="lastName"
                     label="Last Name"
                     touched={touched}
                     errors={errors}
                  />
                  <InputField
                     name="username"
                     label="Username"
                     touched={touched}
                     errors={errors}
                  />
                  <InputField
                     name="email"
                     label="Email"
                     type="email"
                     touched={touched}
                     errors={errors}
                  />
                  <div className="flex items-center justify-between">
                     <SubmitButton isSubmitting={isSubmitting} text="Update" />
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default UpdateUser;
