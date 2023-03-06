import styles from "./styles.module.css";
import FormikTextInput from "../customTextfield";
import FormikSubmit from "../FormikSubmit";
import { Form } from "formik";
import React, { useState, useEffect } from "react";

const FormFields = () => {
  return (
    <Form>
      <div className={styles.profileForm}>
        <div className={styles.profileField}>
          <div className={styles.profileInput}>
            <label>Name</label>
            <FormikTextInput
              name="name"
              className="form-field"
              placeholder="Name"
              variant="outlined"
            />
          </div>
          <div className={styles.profileInput}>
            <label>Code *</label>
            <FormikTextInput
              className="form-field"
              name="code"
              variant="outlined"
              placeholder="Code"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormikSubmit name="submitButon" color="primary" submitText="SUBMIT" />
      </div>
    </Form>
  );
};

export default FormFields;
