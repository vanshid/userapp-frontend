import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormFields from "./FormFields";

const validationSchema = Yup.object({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const AddUserForm = ({ email = "", password = "", onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{
          email,
          password,
        }}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values, setSubmitting);
        }}
      >
        <FormFields />
      </Formik>
    </>
  );
};

export default AddUserForm;
