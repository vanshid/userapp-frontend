import styles from "./styles.module.css";
import FormikTextInput from "../customTextfield";
import FormikSubmit from "../FormikSubmit";
import { Form } from "formik";
import React from "react";

const FormFields = () => {
  return (
    <Form>
      <div className={styles.profileForm}>
        <div className={styles.profileField}>
          <div className={styles.profileInput}>
            <label>Name *</label>
            <FormikTextInput
              name="name"
              variant="outlined"
              placeholder="Name"
              className="form-field"
            />
          </div>
          <div className={styles.profileInput}>
            <label>Username *</label>
            <FormikTextInput
              className="form-field"
              name="username"
              variant="outlined"
              placeholder="Username"
            />
          </div>

          <div className={styles.profileInput}>
            {" "}
            <label>Email *</label>
            <FormikTextInput
              className="form-field"
              placeholder="Email"
              name="email"
              variant="outlined"
            />
          </div>
          <div className={styles.profileInput}>
            {" "}
            <label>Password *</label>
            <FormikTextInput
              name="password"
              className="form-field"
              placeholder="Password"
              variant="outlined"
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
