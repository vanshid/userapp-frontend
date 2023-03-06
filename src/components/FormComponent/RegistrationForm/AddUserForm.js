import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormFields from "./FormFields";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: Yup.string().required("required"),
});

const AddUserForm = ({
  name = "",
  username = "",
  email = "",
  password = "",
  onSubmit,
}) => {
  return (
    <>
      <Formik
        initialValues={{
          name,
          username,
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
