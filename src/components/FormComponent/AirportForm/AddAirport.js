import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormFields from "./FormFields";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  code: Yup.string().required("Required").min(6).max(6),
});

const AddUserForm = ({ name = "", code = "", onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{
          name,
          code,
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
