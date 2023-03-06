import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

const FormikTextInput = ({
  fullWidth = false,
  type = "text",
  label,
  multiline,
  disabled,
  rows,
  rowsMax,
  variant,
  ...props
}) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  const inputStyle = {
    fontFamily: "gotham",
  };

  return (
    <TextField
      placeholder={label}
      color="primary"
      type={type}
      style={{ minWidth: "350px", maxWidth: "350px" }}
      inputProps={{
        style: inputStyle,
      }}
      autoComplete="off"
      fullWidth={fullWidth}
      rows={rows}
      disabled={disabled}
      rowsMax={rowsMax}
      multiline={multiline}
      {...field}
      {...props}
      err
      error={!!(meta.touched && meta.error)}
      label={label}
      helperText={`${meta.touched && meta.error ? meta.error : ""}`}
      variant={variant}
    />
  );
};

export default FormikTextInput;
