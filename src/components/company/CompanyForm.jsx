import { Form, Formik } from "formik";
import React from "react";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";
import { companyFormValidationSchema } from "../../utils/validationSchemas";

const CompanyForm = ({ initialValues }) => {
   const handleSubmit = async () => {};

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={companyFormValidationSchema}
         onSubmit={handleSubmit}
      >
         {({ isSubmitting, touched, errors }) => (
            <Form className="max-w-lg mx-auto p-6 pt-1 bg-white rounded shadow-md mt-6">
               <h1 className="text-center text-2xl my-4 font-bold">
                  Add Company
               </h1>
               <hr />
               <div className="flex space-x-11 mt-2">
                  <InputField
                     name="title"
                     label="Title"
                     touched={touched}
                     errors={errors}
                  />
                  <InputField
                     name="location"
                     label="Location"
                     touched={touched}
                     errors={errors}
                  />
               </div>
               <div className="flex space-x-11 mt-2">
                  <InputField
                     name="website"
                     label="Website"
                     touched={touched}
                     errors={errors}
                  />
                  <InputField
                     name="established_date"
                     label="Established Date"
                     touched={touched}
                     errors={errors}
                     type="date"
                  />
               </div>
               <InputField
                  name="description"
                  label="Description"
                  touched={touched}
                  errors={errors}
               />
               <div className="flex items-center justify-between">
                  <SubmitButton isSubmitting={isSubmitting} text="Submit" />
               </div>
            </Form>
         )}
      </Formik>
   );
};

export default CompanyForm;
