import React from "react";
import { useFormikContext } from "formik";
import { BlueButton } from "../../UI/customButton";

const FormikSubmit = ({ submitText, color }) => {
  const { submitForm, isSubmitting } = useFormikContext();

  const handleClick = () => submitForm();

  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "25px",
        minWidth: "350px",
        maxWidth: "350px",
      }}
    >
      <BlueButton variant="contained" fullWidth onClick={handleClick}>
        {submitText}
      </BlueButton>
    </div>
  );
};

export default FormikSubmit;
