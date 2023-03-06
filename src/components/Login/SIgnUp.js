import React from "react";
import SignUpForm from "../FormComponent/RegistrationForm/AddUserForm";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import registrationAPI from "../../API/Login/registraionUser";

const SignUp = () => {
  const { addToast } = useToasts();
  const history = useHistory();

  const submitProfile = async (values, setSubmitting) => {
    try {
      const resp = await registrationAPI(values);

      if (resp) {
        addToast("User Created Successfully", {
          appearance: "success",
          autoDismiss: 500,
        });
      }

      setSubmitting(false);
      history.push("/login");
    } catch (e) {
      setSubmitting(false);
      addToast("Error While Creating User", {
        appearance: "error",
        autoDismiss: 500,
      });
    }
  };

  return (
    <>
      <h3
        style={{ textAlign: "center", marginTop: "5vh", marginBottom: "2vh" }}
      >
        Sign Up
      </h3>
      <SignUpForm onSubmit={submitProfile} />
    </>
  );
};
export default SignUp;
