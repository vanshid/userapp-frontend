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
            <label>Email</label>
            <FormikTextInput
              name="email"
              className="form-field"
              placeholder="Email"
              variant="outlined"
            />
          </div>
          <div className={styles.profileInput}>
            <label>Password *</label>
            <FormikTextInput
              className="form-field"
              name="password"
              variant="outlined"
              placeholder="Password"
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
        <FormikSubmit name="submitButon" color="primary" submitText="SIGN IN" />
      </div>
    </Form>
  );
};

export default FormFields;
