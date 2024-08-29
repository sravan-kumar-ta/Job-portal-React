import { Form, Formik } from "formik";
import React from "react";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";
import { registerValidationSchema } from "../../utils/validationSchemas";
import { IoCloseSharp } from "react-icons/io5";

const UpdateUserForm = ({ user, onClick }) => {
   const handleSubmit = async () => {};

   return (
      <Formik
         initialValues={user}
         validationSchema={registerValidationSchema}
         onSubmit={handleSubmit}
      >
         {({ isSubmitting, touched, errors }) => (
            <Form className="max-w-lg mx-auto p-6 pt-1 bg-white rounded shadow-md mt-10 relative">
               <h1 className="text-center text-2xl my-4 font-bold">
                  Update User
               </h1>
               <hr />
               <div className="flex space-x-11 mt-2">
                  <InputField
                     name="first_name"
                     label="First name"
                     touched={touched}
                     errors={errors}
                  />
                  <InputField
                     name="last_name"
                     label="Last name"
                     touched={touched}
                     errors={errors}
                  />
               </div>
               <div className="flex space-x-11 mt-2">
                  <InputField
                     name="username"
                     label="Username"
                     touched={touched}
                     errors={errors}
                  />
                  <InputField
                     name="email"
                     label="Email"
                     touched={touched}
                     errors={errors}
                     type="email"
                  />
               </div>
               <div className="flex items-center justify-between">
                  <SubmitButton isSubmitting={isSubmitting} text="Submit" />
               </div>
               

               <button
                  onClick={onClick}
                  className="absolute top-2 right-2 rounded-full bg-zinc-100 p-1 text-2xl text-red-400 hover:bg-zinc-200 hover:text-red-600 shadow-xl transition-shadow duration-300"
               >
                  <IoCloseSharp />
               </button>
            </Form>
         )}
      </Formik>
   );
};

export default UpdateUserForm;
